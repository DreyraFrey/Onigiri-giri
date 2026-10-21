// Simple shared helpers
console.log('Onigiri-giri loaded');

// Basic quiz data (can be expanded)
const quizData = [
  { q: 'What is あ?', a: 'a' },
  { q: 'What is か?', a: 'ka' },
  { q: 'What is さ?', a: 'sa' },
  { q: 'What is た?', a: 'ta' },
  { q: 'What is な?', a: 'na' }
];

function startSimpleQuiz() {
  let score = 0;
  for (let item of quizData) {
    const ans = prompt(item.q);
    if (ans && ans.trim().toLowerCase() === item.a) score++;
  }
  alert(`Score: ${score} / ${quizData.length}`);
}

// Attach if quiz button exists
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('startQuiz');
  if (btn) btn.addEventListener('click', startSimpleQuiz);
});