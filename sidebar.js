// Shared sidebar: progress + daily word
(function() {
  // Progress
  const progress = JSON.parse(localStorage.getItem('og-progress') || '{}');
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  set('prog-hira', (progress.hira || 0) + '/46');
  set('prog-kata', (progress.kata || 0) + '/46');
  set('prog-kanji', (progress.kanji || 0) + '/100');
  set('prog-vocab', progress.vocab || 0);

  // Daily word (same all day)
  const words = [
    { w: '仕事', r: 'shigoto', m: 'work / job' },
    { w: '学校', r: 'gakkō', m: 'school' },
    { w: 'ゲーム', r: 'gēmu', m: 'game' },
    { w: '食べる', r: 'taberu', m: 'to eat' },
    { w: '買う', r: 'kau', m: 'to buy' },
    { w: 'ヤバイ', r: 'yabai', m: 'awesome / dangerous' },
    { w: 'おおきに', r: 'ōkini', m: 'thank you (Kansai)' },
    { w: '推し', r: 'oshi', m: 'favorite (VTuber)' },
    { w: '草', r: 'kusa', m: 'lol' }
  ];
  const today = new Date().toDateString();
  const seed = today.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const word = words[seed % words.length];
  set('daily-word', word.w);
  set('daily-romaji', word.r);
  set('daily-meaning', word.m);
})();
