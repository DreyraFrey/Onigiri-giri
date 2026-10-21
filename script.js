// Onigiri-giri quizzes
const hiraganaData = [
  { q: 'あ', a: 'a', options: ['a', 'i', 'u', 'e'] },
  { q: 'か', a: 'ka', options: ['ka', 'ki', 'ku', 'ke'] },
  { q: 'さ', a: 'sa', options: ['sa', 'shi', 'su', 'se'] },
  { q: 'た', a: 'ta', options: ['ta', 'chi', 'tsu', 'te'] },
  { q: 'な', a: 'na', options: ['na', 'ni', 'nu', 'ne'] },
  { q: 'は', a: 'ha', options: ['ha', 'hi', 'fu', 'he'] },
  { q: 'ま', a: 'ma', options: ['ma', 'mi', 'mu', 'me'] },
  { q: 'や', a: 'ya', options: ['ya', 'yu', 'yo', 'wa'] },
  { q: 'ら', a: 'ra', options: ['ra', 'ri', 'ru', 're'] },
  { q: 'わ', a: 'wa', options: ['wa', 'wo', 'n', 'a'] },
  { q: 'が', a: 'ga', options: ['ga', 'gi', 'gu', 'ge'] },
  { q: 'ざ', a: 'za', options: ['za', 'ji', 'zu', 'ze'] },
  { q: 'だ', a: 'da', options: ['da', 'ji', 'zu', 'de'] },
  { q: 'ば', a: 'ba', options: ['ba', 'bi', 'bu', 'be'] },
  { q: 'ぱ', a: 'pa', options: ['pa', 'pi', 'pu', 'pe'] }
];

const katakanaData = [
  { q: 'ア', a: 'a', options: ['a', 'i', 'u', 'e'] },
  { q: 'カ', a: 'ka', options: ['ka', 'ki', 'ku', 'ke'] },
  { q: 'サ', a: 'sa', options: ['sa', 'shi', 'su', 'se'] },
  { q: 'タ', a: 'ta', options: ['ta', 'chi', 'tsu', 'te'] },
  { q: 'ナ', a: 'na', options: ['na', 'ni', 'nu', 'ne'] },
  { q: 'ハ', a: 'ha', options: ['ha', 'hi', 'fu', 'he'] },
  { q: 'マ', a: 'ma', options: ['ma', 'mi', 'mu', 'me'] },
  { q: 'ヤ', a: 'ya', options: ['ya', 'yu', 'yo', 'wa'] },
  { q: 'ラ', a: 'ra', options: ['ra', 'ri', 'ru', 're'] },
  { q: 'ワ', a: 'wa', options: ['wa', 'wo', 'n', 'a'] },
  { q: 'ガ', a: 'ga', options: ['ga', 'gi', 'gu', 'ge'] },
  { q: 'ザ', a: 'za', options: ['za', 'ji', 'zu', 'ze'] },
  { q: 'ダ', a: 'da', options: ['da', 'ji', 'zu', 'de'] },
  { q: 'バ', a: 'ba', options: ['ba', 'bi', 'bu', 'be'] },
  { q: 'パ', a: 'pa', options: ['pa', 'pi', 'pu', 'pe'] }
];

let current = 0;
let score = 0;
let shuffled = [];
let currentMode = null;

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getData(mode) {
  if (mode === 'katakana') return katakanaData;
  if (mode === 'mixed') return [...hiraganaData, ...katakanaData];
  return hiraganaData;
}

function showQuestion() {
  if (current >= shuffled.length) {
    document.getElementById('question').textContent = 'Done!';
    document.getElementById('options').innerHTML = '';
    document.getElementById('score').textContent = `Score: ${score} / ${shuffled.length}`;
    const startBtn = document.getElementById('startQuiz');
    startBtn.style.display = 'block';
    startBtn.textContent = 'Try Again';
    return;
  }

  const item = shuffled[current];
  document.getElementById('question').innerHTML = `What is <span style="font-size:2.4rem; display:block; margin:0.5rem 0;">${item.q}</span>?`;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  const opts = shuffle(item.options);
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.style.cssText = 'padding:1rem; font-size:1.2rem; border:2px solid #e85d04; border-radius:10px; background:white; min-height:56px; width:100%; max-width:320px;';
    btn.onclick = () => {
      Array.from(optionsDiv.children).forEach(b => b.disabled = true);
      if (opt === item.a) {
        score++;
        btn.style.background = '#4caf50';
        btn.style.color = 'white';
      } else {
        btn.style.background = '#f44336';
        btn.style.color = 'white';
        Array.from(optionsDiv.children).forEach(b => {
          if (b.textContent === item.a) {
            b.style.background = '#4caf50';
            b.style.color = 'white';
          }
        });
      }
      setTimeout(() => {
        current++;
        showQuestion();
      }, 800);
    };
    optionsDiv.appendChild(btn);
  });

  document.getElementById('score').textContent = `Question ${current + 1} / ${shuffled.length}`;
}

function startQuiz() {
  if (!currentMode) return;
  shuffled = shuffle(getData(currentMode));
  current = 0;
  score = 0;
  document.getElementById('startQuiz').style.display = 'none';
  showQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
  const modeButtons = document.querySelectorAll('.mode-btn');
  modeButtons.forEach(btn => {
    btn.style.cssText = 'padding:1rem 1.4rem; font-size:1.15rem; border:2px solid #e85d04; border-radius:10px; background:white; min-height:56px; flex:1; min-width:140px;';
    btn.addEventListener('click', () => {
      currentMode = btn.dataset.mode;
      modeButtons.forEach(b => {
        b.style.background = 'white';
        b.style.color = '#222';
      });
      btn.style.background = '#e85d04';
      btn.style.color = 'white';
      document.getElementById('question').textContent = `Ready for ${currentMode.charAt(0).toUpperCase() + currentMode.slice(1)} quiz`;
      const startBtn = document.getElementById('startQuiz');
      startBtn.style.display = 'block';
      startBtn.textContent = 'Start';
      document.getElementById('options').innerHTML = '';
      document.getElementById('score').textContent = '';
    });
  });

  const startBtn = document.getElementById('startQuiz');
  if (startBtn) {
    startBtn.addEventListener('click', startQuiz);
  }
});