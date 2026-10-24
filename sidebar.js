// Shared sidebar: progress + daily word + studying tip
(function() {
  const KEY = 'og-progress';

  function getProgress() {
    return JSON.parse(localStorage.getItem(KEY) || '{}');
  }

  function saveProgress(p) {
    localStorage.setItem(KEY, JSON.stringify(p));
  }

  function updateDisplay() {
    const p = getProgress();
    const set = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    set('prog-hira', (p.hira || 0) + '/46');
    set('prog-kata', (p.kata || 0) + '/46');
    set('prog-kanji', (p.kanji || 0) + '/100');
    set('prog-vocab', p.vocab || 0);
  }

  window.ogProgress = {
    add(type, amount = 1) {
      const p = getProgress();
      p[type] = (p[type] || 0) + amount;
      saveProgress(p);
      updateDisplay();
    }
  };

  updateDisplay();

  // Daily word — only proper N5–N4 vocabulary (no slang)
  const words = [
    { w: '仕事', r: 'shigoto', m: 'work / job' },
    { w: '学校', r: 'gakkō', m: 'school' },
    { w: 'ゲーム', r: 'gēmu', m: 'game' },
    { w: '食べる', r: 'taberu', m: 'to eat' },
    { w: '買う', r: 'kau', m: 'to buy' },
    { w: '飲む', r: 'nomu', m: 'to drink' },
    { w: '行く', r: 'iku', m: 'to go' },
    { w: '見る', r: 'miru', m: 'to see / watch' },
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
    "Use the Vocab Exam on Beginner if new words feel hard.",
    "Practice a little every day — consistency beats long sessions.",
    "Match the reading to the kana, not the other way around.",
    "Look at the example sentences to see how words are used."
  ];
  set('studying-tip', tips[seed % tips.length]);

  // Daily streak
  const STREAK_KEY = 'og-streak';
  function getStreak() {
    return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"days":0,"last":""}');
  }
  function markPracticed() {
    const s = getStreak();
    const today = new Date().toDateString();
    if (s.last !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      s.days = (s.last === yesterday) ? s.days + 1 : 1;
      s.last = today;
      localStorage.setItem(STREAK_KEY, JSON.stringify(s));
    }
    updateStreakDisplay();
  }
  function updateStreakDisplay() {
    const s = getStreak();
    const el = document.getElementById('streak');
    if (el) {
      const today = new Date().toDateString();
      el.textContent = s.days + ' day' + (s.days !== 1 ? 's' : '') + (s.last === today ? ' ✓' : '');
    }
  }
  window.ogStreak = { mark: markPracticed };
  updateStreakDisplay();

})();
