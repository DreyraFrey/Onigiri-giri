// Shared sidebar: progress + daily word + studying tip
(function() {
  const KEY = 'og-progress';

  function getProgress() {
    return JSON.parse(localStorage.getItem(KEY) || '{}');
  }

  function updateDisplay() {
    const p = getProgress();
    const paths = JSON.parse(localStorage.getItem('og-paths') || '{"current":null,"progress":{}}');
    const set = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    const hiraCount = window.ogLearned ? ogLearned.getLearnedCount('hira') : (p.hira || 0);
    const kataCount = window.ogLearned ? ogLearned.getLearnedCount('kata') : (p.kata || 0);
    const kanjiCount = window.ogLearned ? ogLearned.getLearnedCount('kanji') : (p.kanji || 0);
    set('prog-hira', hiraCount + '/46');
    set('prog-kata', kataCount + '/46');
    set('prog-kanji', kanjiCount + '/500');
    set('m-hira', hiraCount);
    set('m-kata', kataCount);
    set('m-kanji', kanjiCount);
    
    // Path info
    const pathEl = document.getElementById('sidebar-path');
    if (pathEl) {
      if (paths.current) {
        const missions = { beginner: 50, apprentice: 50, master: 50 };
        const done = (paths.progress[paths.current]?.completed || []).length;
        const total = missions[paths.current] || 50;
        pathEl.innerHTML = '<b>' + paths.current + '</b> ' + done + '/' + total;
      } else {
        pathEl.textContent = 'No path';
      }
    }
    
    // Streak
    const streak = JSON.parse(localStorage.getItem('og-streak') || '{"days":0}');
    const streakEl = document.getElementById('streak');
    if (streakEl) streakEl.textContent = streak.days + ' day' + (streak.days !== 1 ? 's' : '');
    set('m-streak', streak.days);
  }

  // Expose for external calls
  window.updateSidebar = updateDisplay;
  window.ogProgress = {
    add(type, amount = 1) {
      const p = getProgress();
      p[type] = (p[type] || 0) + amount;
      localStorage.setItem(KEY, JSON.stringify(p));
      updateDisplay();
    }
  };

  updateDisplay();

  // Daily word
  const words = [
    { w: '仕事', r: 'shigoto', m: 'work / job' },
    { w: '学校', r: 'gakkou', m: 'school' },
    { w: 'ゲーム', r: 'geemu', m: 'game' },
    { w: '食べる', r: 'taberu', m: 'to eat' },
    { w: '買う', r: 'kau', m: 'to buy' },
    { w: '飲む', r: 'nomu', m: 'to drink' },
    { w: '行く', r: 'iku', m: 'to go' },
    { w: '見る', r: 'miru', m: 'to see' },
    { w: '話す', r: 'hanasu', m: 'to speak' },
    { w: '本', r: 'hon', m: 'book' },
    { w: '水', r: 'mizu', m: 'water' },
    { w: 'ご飯', r: 'gohan', m: 'rice / meal' }
  ];
  const today = new Date().toDateString();
  const seed = today.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const word = words[seed % words.length];
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  set('daily-word', word.w);
  set('daily-romaji', word.r);
  set('daily-meaning', word.m);

  const tips = [
    "Start with the Hiragana chart, then try the matching game.",
    "Review a few Kanji every day instead of cramming.",
    "Read the example sentences out loud.",
    "Practice a little every day.",
    "Match the reading to the kana, not the other way around."
  ];
  set('studying-tip', tips[seed % tips.length]);

  // Streak
  const STREAK_KEY = 'og-streak';
  function markPracticed() {
    const s = JSON.parse(localStorage.getItem(STREAK_KEY) || '{"days":0,"last":""}');
    const today = new Date().toDateString();
    if (s.last !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      s.days = (s.last === yesterday) ? s.days + 1 : 1;
      s.last = today;
      localStorage.setItem(STREAK_KEY, JSON.stringify(s));
    }
    updateDisplay();
    if (window.ogSync) window.ogSync.syncToCloud();
  }
  window.ogStreak = { mark: markPracticed };

})();
