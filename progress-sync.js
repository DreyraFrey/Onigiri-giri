// Progress sync with Supabase
const PROGRESS_KEYS = ['og-progress', 'og-streak', 'og-review', 'og-hira', 'og-kata', 'og-kanji', 'og-vocab', 'og-paths'];

function showStatus(msg) {
  let el = document.getElementById('sync-status');
  if (!el) {
    el = document.createElement('div');
    el.id = 'sync-status';
    el.style.cssText = 'position:fixed;bottom:10px;left:10px;background:#333;color:#fff;padding:8px 12px;border-radius:8px;font-size:12px;z-index:9999;';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  setTimeout(() => el.textContent = '', 3000);
}

async function collectProgress() {
  const data = {};
  PROGRESS_KEYS.forEach(key => {
    const val = localStorage.getItem(key);
    if (val) data[key] = JSON.parse(val);
  });
  return data;
}

async function applyProgress(data) {
  if (!data) return;
  Object.entries(data).forEach(([key, val]) => {
    localStorage.setItem(key, JSON.stringify(val));
  });
}

async function syncToCloud() {
  if (!window.ogAuth) { showStatus('Auth not ready'); return; }
  const user = await ogAuth.getUser();
  if (!user) { showStatus('Not logged in'); return; }
  const data = await collectProgress();
  const pathCount = data['og-paths']?.progress?.beginner?.completed?.length || 0;
  showStatus('Saving ' + pathCount + ' lessons...');
  await ogAuth.saveProgress(data);
  showStatus('Saved!');
}

async function syncFromCloud() {
  if (!window.ogAuth) { showStatus('Auth not ready'); return; }
  const user = await ogAuth.getUser();
  if (!user) { showStatus('Not logged in'); return; }
  showStatus('Loading...');
  const cloud = await ogAuth.loadProgress();
  const pathCount = cloud?.['og-paths']?.progress?.beginner?.completed?.length || 0;
  showStatus('Loaded ' + pathCount + ' lessons');
  if (cloud) {
    await applyProgress(cloud);
    if (window.updateStreakDisplay) window.updateStreakDisplay();
  }
}

async function initSync() {
  let attempts = 0;
  while (!window.ogAuth && attempts < 20) {
    await new Promise(r => setTimeout(r, 100));
    attempts++;
  }
  if (window.ogAuth) {
    await syncFromCloud();
  }
}

document.addEventListener('DOMContentLoaded', initSync);
window.addEventListener('beforeunload', syncToCloud);

window.ogSync = { syncToCloud, syncFromCloud, collectProgress };
