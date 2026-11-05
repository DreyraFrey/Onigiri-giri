const XP_KEY = 'og-xp';
const LEVEL_XP = [0, 100, 250, 500, 1000, 1750, 2750, 4000, 5500, 7500, 10000];

function getXP() {
  return parseInt(localStorage.getItem(XP_KEY) || '0');
}

function addXP(amount) {
  const current = getXP();
  const newXP = current + amount;
  localStorage.setItem(XP_KEY, newXP);
  checkLevelUp(current, newXP);
  if (typeof syncToCloud === 'function') syncToCloud();
  return newXP;
}

function getLevel() {
  const xp = getXP();
  for (let i = LEVEL_XP.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_XP[i]) return i + 1;
  }
  return 1;
}

function getLevelProgress() {
  const xp = getXP();
  const level = getLevel();
  const currentLevelXP = LEVEL_XP[level - 1] || 0;
  const nextLevelXP = LEVEL_XP[level] || LEVEL_XP[LEVEL_XP.length - 1];
  const progress = (xp - currentLevelXP) / (nextLevelXP - currentLevelXP);
  return { level, xp, currentLevelXP, nextLevelXP, progress: Math.min(1, progress) };
}

function checkLevelUp(oldXP, newXP) {
  const oldLevel = getLevelFromXP(oldXP);
  const newLevel = getLevelFromXP(newXP);
  if (newLevel > oldLevel) {
    showLevelUp(newLevel);
  }
}

function getLevelFromXP(xp) {
  for (let i = LEVEL_XP.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_XP[i]) return i + 1;
  }
  return 1;
}

function showLevelUp(level) {
  const toast = document.createElement('div');
  toast.className = 'level-up-toast';
  toast.innerHTML = '<div class="level-up-content"><span class="level-up-star">⭐</span><div>Level ' + level + '!</div></div>';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Achievements
const ACHIEVEMENTS = [
  { id: 'first-lesson', name: 'First Steps', desc: 'Complete your first lesson', icon: '🌱' },
  { id: 'streak-7', name: 'Week Warrior', desc: '7-day streak', icon: '🔥' },
  { id: 'streak-30', name: 'Monthly Master', desc: '30-day streak', icon: '💪' },
  { id: 'kanji-50', name: 'Kanji Novice', desc: 'Learn 50 kanji', icon: '📖' },
  { id: 'kanji-100', name: 'Kanji Apprentice', desc: 'Learn 100 kanji', icon: '📚' },
  { id: 'kanji-300', name: 'Kanji Master', desc: 'Learn 300 kanji', icon: '🎓' },
  { id: 'path-beginner', name: 'Beginner Complete', desc: 'Finish Beginner path', icon: '🏅' },
  { id: 'path-apprentice', name: 'Apprentice Complete', desc: 'Finish Apprentice path', icon: '🥈' },
  { id: 'path-master', name: 'Master Complete', desc: 'Finish Master path', icon: '🥇' },
  { id: 'level-5', name: 'Rising Star', desc: 'Reach level 5', icon: '⭐' },
  { id: 'level-10', name: 'Veteran', desc: 'Reach level 10', icon: '🌟' }
];

const ACHIEVED_KEY = 'og-achievements';

function getAchievements() {
  return JSON.parse(localStorage.getItem(ACHIEVED_KEY) || '[]');
}

function unlockAchievement(id) {
  const achieved = getAchievements();
  if (achieved.includes(id)) return false;
  achieved.push(id);
  localStorage.setItem(ACHIEVED_KEY, JSON.stringify(achieved));
  const ach = ACHIEVEMENTS.find(a => a.id === id);
  if (ach) showAchievement(ach);
  if (typeof syncToCloud === 'function') syncToCloud();
  return true;
}

function hasAchievement(id) {
  return getAchievements().includes(id);
}

function showAchievement(ach) {
  const toast = document.createElement('div');
  toast.className = 'achievement-toast';
  toast.innerHTML = '<div class="achievement-content"><span class="achievement-icon">' + ach.icon + '</span><div><b>' + ach.name + '</b><br><small>' + ach.desc + '</small></div></div>';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

function checkAchievements() {
  // Check streak
  const streak = parseInt(localStorage.getItem('og-streak') || '0');
  if (streak >= 7) unlockAchievement('streak-7');
  if (streak >= 30) unlockAchievement('streak-30');
  
  // Check kanji
  if (window.ogLearned) {
    const kanjiCount = ogLearned.getLearnedCount('kanji');
    if (kanjiCount >= 50) unlockAchievement('kanji-50');
    if (kanjiCount >= 100) unlockAchievement('kanji-100');
    if (kanjiCount >= 300) unlockAchievement('kanji-300');
  }
  
  // Check level
  const level = getLevel();
  if (level >= 5) unlockAchievement('level-5');
  if (level >= 10) unlockAchievement('level-10');
}

window.ogXP = { getXP, addXP, getLevel, getLevelProgress, unlockAchievement, hasAchievement, getAchievements, checkAchievements, ACHIEVEMENTS };
