// Learned tracking system
const LEARNED_KEY = 'og-learned';

function getLearned() {
  return JSON.parse(localStorage.getItem(LEARNED_KEY) || '{"hira":{},"kata":{},"kanji":{}}');
}

function saveLearned(data) {
  localStorage.setItem(LEARNED_KEY, JSON.stringify(data));
}

function trackAnswer(type, item, correct) {
  const data = getLearned();
  if (!data[type]) data[type] = {};
  if (!data[type][item]) data[type][item] = 0;
  
  if (correct) {
    data[type][item] = Math.min(10, data[type][item] + 1);
  } else {
    data[type][item] = Math.max(0, data[type][item] - 1);
  }
  saveLearned(data);
  return data[type][item];
}

function isLearned(type, item) {
  const data = getLearned();
  return (data[type]?.[item] || 0) >= 8;
}

function getLearnedCount(type) {
  const data = getLearned();
  if (!data[type]) return 0;
  return Object.values(data[type]).filter(v => v >= 8).length;
}

window.ogLearned = { trackAnswer, isLearned, getLearnedCount, getLearned };
