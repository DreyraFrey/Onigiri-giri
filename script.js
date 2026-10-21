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
let currentMode = 'hiragana';

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
    document.getElementById('startQuiz').style.display = 'inline-block';
    document.getElementById('startQuiz').textContent = 'Try Again';
    return;
  }

  const item = shuffled[current];
  document.getElementById('question').innerHTML = `What is <span style="font-size:2.2rem">${item.q}</span>?`;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  const opts = shuffle(item.options);
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.style.cssText = 'padding:0.8rem; font-size:1.1rem; border:1px solid #e85d04; border-radius:8px; background:white; min-height:48px;';
    btn.onclick = () => {
      Array.from(optionsDiv.children).forEach(b => b.disabled = true);
      if (opt === item.a) {
        score++;
        btn.style.background = '#4caf50';
        btn.style.color = 'white';
      } else {
        btn.style.background = '#f44336';
        btn.style.color = 'white';
        // highlight correct
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
      }, 700);
    };
    optionsDiv.appendChild(btn);
  });

  document.getElementById('score').textContent = `Question ${current + 1} / ${shuffled.length}`;
}

function startQuiz() {
  shuffled = shuffle(getData(currentMode));
  current = 0;
  score = 0;
  document.getElementById('startQuiz').style.display = 'none';
  showQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.style.cssText = 'padding:0.6rem 1rem; border:1px solid #e85d04; border-radius:8px; background:white; min-height:44px;';
    btn.addEventListener('click', () => {
      currentMode = btn.dataset.mode;
      document.querySelectorAll('.mode-btn').forEach(b => b.style.background = 'white');
      btn.style.background = '#ffe0b2';
      document.getElementById('question').textContent = `Ready for ${currentMode} quiz`;
      document.getElementById('startQuiz').style.display = 'inline-block';
      document.getElementById('startQuiz').textContent = 'Start';
      document.getElementById('options').innerHTML = '';
      document.getElementById('score').textContent = '';
    });
  });

  document.getElementById('startQuiz').addEventListener('click', startQuiz);
});