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
  if (!window.ogAuth) return;
  const user = await ogAuth.getUser();
  if (!user) return;
  const data = await collectProgress();
  await ogAuth.saveProgress(data);
}

async function syncFromCloud() {
  if (!window.ogAuth) return;
  const user = await ogAuth.getUser();
  if (!user) return;
  const cloud = await ogAuth.loadProgress();
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
