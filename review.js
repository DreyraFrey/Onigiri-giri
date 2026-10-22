// Onigiri-giri Spaced Repetition (long-term + in-session)
const SRS_KEY = 'og-srs';

function srsGet() {
  return JSON.parse(localStorage.getItem(SRS_KEY) || '{}');
}
function srsSave(data) {
  localStorage.setItem(SRS_KEY, JSON.stringify(data));
}

// Record a review result
// type: 'hira' | 'kata' | 'kanji' | 'vocab'
// id: unique string (e.g. 'hira-あ' or 'vocab-仕事')
// correct: boolean
function srsRecord(type, id, correct) {
  const data = srsGet();
  if (!data[type]) data[type] = {};
  const item = data[type][id] || { interval: 0, ease: 2.5, due: Date.now(), seen: 0 };

  item.seen++;
  if (correct) {
    item.interval = item.interval === 0 ? 1 : Math.round(item.interval * item.ease);
    item.ease = Math.min(item.ease + 0.1, 3);
    item.due = Date.now() + item.interval * 24 * 60 * 60 * 1000;
  } else {
    item.interval = 0;
    item.ease = Math.max(item.ease - 0.2, 1.3);
    item.due = Date.now(); // due immediately
  }
  data[type][id] = item;
  srsSave(data);
}

// Get items due for review
function srsDue(type, limit = 20) {
  const data = srsGet();
  const items = data[type] || {};
  const now = Date.now();
  return Object.entries(items)
    .filter(([_, v]) => v.due <= now)
    .sort((a, b) => a[1].due - b[1].due)
    .slice(0, limit)
    .map(([id]) => id);
}

// In-session queue with Pimsleur-style reinsertion
class SessionQueue {
  constructor(items) {
    this.queue = [...items];
    this.seen = new Map();
  }
  next() {
    return this.queue.shift();
  }
  answered(id, correct) {
    if (correct) {
      const count = (this.seen.get(id) || 0) + 1;
      this.seen.set(id, count);
      // Reinsert later in the session (Pimsleur-style)
      if (count < 3) {
        const pos = Math.min(this.queue.length, 3 + count * 2);
        this.queue.splice(pos, 0, id);
      }
    } else {
      // Wrong — bring it back soon
      this.queue.splice(2, 0, id);
    }
  }
  remaining() {
    return this.queue.length;
  }
}

window.ogSRS = { record: srsRecord, due: srsDue, SessionQueue };
