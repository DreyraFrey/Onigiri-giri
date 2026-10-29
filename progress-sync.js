// Progress sync with Supabase
const PROGRESS_KEYS = ['og-progress', 'og-streak', 'og-review', 'og-hira', 'og-kata', 'og-kanji', 'og-vocab'];

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
    // Refresh displays
    if (window.updateStreakDisplay) window.updateStreakDisplay();
  }
}

// Auto-sync on page load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(syncFromCloud, 500);
});

// Sync before unload
window.addEventListener('beforeunload', syncToCloud);

window.ogSync = { syncToCloud, syncFromCloud, collectProgress };
