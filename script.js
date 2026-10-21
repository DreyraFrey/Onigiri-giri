// Onigiri-giri quiz
const quizData = [
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

let current = 0;
let score = 0;
let shuffled = [];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
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
  document.getElementById('question').innerHTML = `What is <span style="font-size:2rem">${item.q}</span>?`;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  const opts = shuffle(item.options);
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.style.cssText = 'padding:0.8rem; font-size:1.1rem; border:1px solid #e85d04; border-radius:8px; background:white; min-height:48px;';
    btn.onclick = () => {
      if (opt === item.a) {
        score++;
        btn.style.background = '#4caf50';
        btn.style.color = 'white';
      } else {
        btn.style.background = '#f44336';
        btn.style.color = 'white';
      }
      setTimeout(() => {
        current++;
        showQuestion();
      }, 600);
    };
    optionsDiv.appendChild(btn);
  });

  document.getElementById('score').textContent = `Question ${current + 1} / ${shuffled.length}`;
}

function startQuiz() {
  shuffled = shuffle(quizData);
  current = 0;
  score = 0;
  document.getElementById('startQuiz').style.display = 'none';
  showQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('startQuiz');
  if (btn) btn.addEventListener('click', startQuiz);
});