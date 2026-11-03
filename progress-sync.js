// Progress sync with Supabase
const PROGRESS_KEYS = ['og-progress', 'og-streak', 'og-review', 'og-hira', 'og-kata', 'og-kanji', 'og-vocab', 'og-paths'];

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
  if (!window.ogAuth) { console.log('ogAuth not ready'); return; }
  const user = await ogAuth.getUser();
  if (!user) { console.log('No user'); return; }
  const data = await collectProgress();
  console.log('Syncing to cloud:', data['og-paths']);
  await ogAuth.saveProgress(data);
  console.log('Synced');
}

async function syncFromCloud() {
  if (!window.ogAuth) { console.log('ogAuth not ready'); return; }
  const user = await ogAuth.getUser();
  if (!user) { console.log('No user'); return; }
  const cloud = await ogAuth.loadProgress();
  console.log('Loaded from cloud:', cloud?.['og-paths']);
  if (cloud) {
    await applyProgress(cloud);
    if (window.updateStreakDisplay) window.updateStreakDisplay();
  }
}

// Wait for auth then sync
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
