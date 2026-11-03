// Structured lessons for paths
const LESSONS = {
  beginner: [
    // Hiragana groups (10 lessons)
    { id: 'hira-a', name: 'あいうえお', type: 'kana', group: 'a', mode: 'hira', items: ['あ','い','う','え','お'] },
    { id: 'hira-ka', name: 'かきくけこ', type: 'kana', group: 'ka', mode: 'hira', items: ['か','き','く','け','こ'] },
    { id: 'hira-sa', name: 'さしすせそ', type: 'kana', group: 'sa', mode: 'hira', items: ['さ','し','す','せ','そ'] },
    { id: 'hira-ta', name: 'たちつてと', type: 'kana', group: 'ta', mode: 'hira', items: ['た','ち','つ','て','と'] },
    { id: 'hira-na', name: 'なにぬねの', type: 'kana', group: 'na', mode: 'hira', items: ['な','に','ぬ','ね','の'] },
    { id: 'hira-ha', name: 'はひふへほ', type: 'kana', group: 'ha', mode: 'hira', items: ['は','ひ','ふ','へ','ほ'] },
    { id: 'hira-ma', name: 'まみむめも', type: 'kana', group: 'ma', mode: 'hira', items: ['ま','み','む','め','も'] },
    { id: 'hira-ya', name: 'やゆよ', type: 'kana', group: 'ya', mode: 'hira', items: ['や','ゆ','よ'] },
    { id: 'hira-ra', name: 'らりるれろ', type: 'kana', group: 'ra', mode: 'hira', items: ['ら','り','る','れ','ろ'] },
    { id: 'hira-wa', name: 'わをん', type: 'kana', group: 'wa', mode: 'hira', items: ['わ','を','ん'] },
    // Katakana groups (10 lessons)
    { id: 'kata-a', name: 'アイウエオ', type: 'kana', group: 'a', mode: 'kata', items: ['ア','イ','ウ','エ','オ'] },
    { id: 'kata-ka', name: 'カキクケコ', type: 'kana', group: 'ka', mode: 'kata', items: ['カ','キ','ク','ケ','コ'] },
    { id: 'kata-sa', name: 'サシスセソ', type: 'kana', group: 'sa', mode: 'kata', items: ['サ','シ','ス','セ','ソ'] },
    { id: 'kata-ta', name: 'タチツテト', type: 'kana', group: 'ta', mode: 'kata', items: ['タ','チ','ツ','テ','ト'] },
    { id: 'kata-na', name: 'ナニヌネノ', type: 'kana', group: 'na', mode: 'kata', items: ['ナ','ニ','ヌ','ネ','ノ'] },
    { id: 'kata-ha', name: 'ハヒフヘホ', type: 'kana', group: 'ha', mode: 'kata', items: ['ハ','ヒ','フ','ヘ','ホ'] },
    { id: 'kata-ma', name: 'マミムメモ', type: 'kana', group: 'ma', mode: 'kata', items: ['マ','ミ','ム','メ','モ'] },
    { id: 'kata-ya', name: 'ヤユヨ', type: 'kana', group: 'ya', mode: 'kata', items: ['ヤ','ユ','ヨ'] },
    { id: 'kata-ra', name: 'ラリルレロ', type: 'kana', group: 'ra', mode: 'kata', items: ['ラ','リ','ル','レ','ロ'] },
    { id: 'kata-wa', name: 'ワヲン', type: 'kana', group: 'wa', mode: 'kata', items: ['ワ','ヲ','ン'] },
    // First 50 kanji (15 lessons, ~3-4 kanji each)
    { id: 'kanji-1', name: '日 月 火', type: 'kanji', items: [
      { k: '日', r: 'ひ', m: 'day / sun' },
      { k: '月', r: 'つき', m: 'month / moon' },
      { k: '火', r: 'ひ', m: 'fire' }
    ]},
    { id: 'kanji-2', name: '水 木 金', type: 'kanji', items: [
      { k: '水', r: 'みず', m: 'water' },
      { k: '木', r: 'き', m: 'tree / wood' },
      { k: '金', r: 'かね', m: 'money / gold' }
    ]},
    { id: 'kanji-3', name: '土 人 山', type: 'kanji', items: [
      { k: '土', r: 'つち', m: 'earth / soil' },
      { k: '人', r: 'ひと', m: 'person' },
      { k: '山', r: 'やま', m: 'mountain' }
    ]},
    { id: 'kanji-4', name: '川 田 口', type: 'kanji', items: [
      { k: '川', r: 'かわ', m: 'river' },
      { k: '田', r: 'た', m: 'rice field' },
      { k: '口', r: 'くち', m: 'mouth' }
    ]},
    { id: 'kanji-5', name: '目 耳 手', type: 'kanji', items: [
      { k: '目', r: 'め', m: 'eye' },
      { k: '耳', r: 'みみ', m: 'ear' },
      { k: '手', r: 'て', m: 'hand' }
    ]},
    { id: 'kanji-6', name: '足 心 力', type: 'kanji', items: [
      { k: '足', r: 'あし', m: 'foot / leg' },
      { k: '心', r: 'こころ', m: 'heart / mind' },
      { k: '力', r: 'ちから', m: 'power / strength' }
    ]},
    { id: 'kanji-7', name: '男 女 子', type: 'kanji', items: [
      { k: '男', r: 'おとこ', m: 'man' },
      { k: '女', r: 'おんな', m: 'woman' },
      { k: '子', r: 'こ', m: 'child' }
    ]},
    { id: 'kanji-8', name: '大 小 中', type: 'kanji', items: [
      { k: '大', r: 'おお', m: 'big' },
      { k: '小', r: 'ちい', m: 'small' },
      { k: '中', r: 'なか', m: 'middle / inside' }
    ]},
    { id: 'kanji-9', name: '上 下 左', type: 'kanji', items: [
      { k: '上', r: 'うえ', m: 'up / above' },
      { k: '下', r: 'した', m: 'down / below' },
      { k: '左', r: 'ひだり', m: 'left' }
    ]},
    { id: 'kanji-10', name: '右 前 後', type: 'kanji', items: [
      { k: '右', r: 'みぎ', m: 'right' },
      { k: '前', r: 'まえ', m: 'front / before' },
      { k: '後', r: 'うし', m: 'back / after' }
    ]},
    { id: 'kanji-11', name: '一 二 三', type: 'kanji', items: [
      { k: '一', r: 'いち', m: 'one' },
      { k: '二', r: 'に', m: 'two' },
      { k: '三', r: 'さん', m: 'three' }
    ]},
    { id: 'kanji-12', name: '四 五 六', type: 'kanji', items: [
      { k: '四', r: 'よん', m: 'four' },
      { k: '五', r: 'ご', m: 'five' },
      { k: '六', r: 'ろく', m: 'six' }
    ]},
    { id: 'kanji-13', name: '七 八 九', type: 'kanji', items: [
      { k: '七', r: 'なな', m: 'seven' },
      { k: '八', r: 'はち', m: 'eight' },
      { k: '九', r: 'きゅう', m: 'nine' }
    ]},
    { id: 'kanji-14', name: '十 百 千', type: 'kanji', items: [
      { k: '十', r: 'じゅう', m: 'ten' },
      { k: '百', r: 'ひゃく', m: 'hundred' },
      { k: '千', r: 'せん', m: 'thousand' }
    ]},
    { id: 'kanji-15', name: '年 時 分', type: 'kanji', items: [
      { k: '年', r: 'とし', m: 'year' },
      { k: '時', r: 'とき', m: 'time / hour' },
      { k: '分', r: 'ふん', m: 'minute / part' }
    ]},
    // Basic vocab (15 lessons)
    { id: 'vocab-1', name: 'Greetings', type: 'vocab', items: [
      { w: 'こんにちは', r: 'konnichiwa', m: 'hello' },
      { w: 'さようなら', r: 'sayounara', m: 'goodbye' },
      { w: 'ありがとう', r: 'arigatou', m: 'thank you' }
    ]},
    { id: 'vocab-2', name: 'More greetings', type: 'vocab', items: [
      { w: 'おはよう', r: 'ohayou', m: 'good morning' },
      { w: 'こんばんは', r: 'konbanwa', m: 'good evening' },
      { w: 'すみません', r: 'sumimasen', m: 'excuse me / sorry' }
    ]},
    { id: 'vocab-3', name: 'Yes and no', type: 'vocab', items: [
      { w: 'はい', r: 'hai', m: 'yes' },
      { w: 'いいえ', r: 'iie', m: 'no' },
      { w: 'わかりました', r: 'wakarimashita', m: 'understood' }
    ]},
    { id: 'vocab-4', name: 'People', type: 'vocab', items: [
      { w: '人', r: 'hito', m: 'person' },
      { w: '男', r: 'otoko', m: 'man' },
      { w: '女', r: 'onna', m: 'woman' }
    ]},
    { id: 'vocab-5', name: 'Family', type: 'vocab', items: [
      { w: '母', r: 'haha', m: 'mother' },
      { w: '父', r: 'chichi', m: 'father' },
      { w: '友達', r: 'tomodachi', m: 'friend' }
    ]},
    { id: 'vocab-6', name: 'Food', type: 'vocab', items: [
      { w: 'ご飯', r: 'gohan', m: 'rice / meal' },
      { w: '水', r: 'mizu', m: 'water' },
      { w: 'パン', r: 'pan', m: 'bread' }
    ]},
    { id: 'vocab-7', name: 'More food', type: 'vocab', items: [
      { w: '肉', r: 'niku', m: 'meat' },
      { w: '魚', r: 'sakana', m: 'fish' },
      { w: '野菜', r: 'yasai', m: 'vegetables' }
    ]},
    { id: 'vocab-8', name: 'Places', type: 'vocab', items: [
      { w: '家', r: 'ie', m: 'house / home' },
      { w: '学校', r: 'gakkou', m: 'school' },
      { w: '店', r: 'mise', m: 'shop / store' }
    ]},
    { id: 'vocab-9', name: 'Time', type: 'vocab', items: [
      { w: '今日', r: 'kyou', m: 'today' },
      { w: '明日', r: 'ashita', m: 'tomorrow' },
      { w: '昨日', r: 'kinou', m: 'yesterday' }
    ]},
    { id: 'vocab-10', name: 'Verbs', type: 'vocab', items: [
      { w: '食べる', r: 'taberu', m: 'to eat' },
      { w: '飲む', r: 'nomu', m: 'to drink' },
      { w: '行く', r: 'iku', m: 'to go' }
    ]},
    { id: 'vocab-11', name: 'More verbs', type: 'vocab', items: [
      { w: '見る', r: 'miru', m: 'to see / watch' },
      { w: '聞く', r: 'kiku', m: 'to listen / ask' },
      { w: '話す', r: 'hanasu', m: 'to speak' }
    ]},
    { id: 'vocab-12', name: 'Adjectives', type: 'vocab', items: [
      { w: '大きい', r: 'ookii', m: 'big' },
      { w: '小さい', r: 'chiisai', m: 'small' },
      { w: '新しい', r: 'atarashii', m: 'new' }
    ]},
    { id: 'vocab-13', name: 'More adjectives', type: 'vocab', items: [
      { w: '古い', r: 'furui', m: 'old' },
      { w: '良い', r: 'ii', m: 'good' },
      { w: '悪い', r: 'warui', m: 'bad' }
    ]},
    { id: 'vocab-14', name: 'Numbers', type: 'vocab', items: [
      { w: '一', r: 'ichi', m: 'one' },
      { w: '二', r: 'ni', m: 'two' },
      { w: '三', r: 'san', m: 'three' }
    ]},
    { id: 'vocab-15', name: 'Review', type: 'vocab', items: [
      { w: '日本', r: 'nihon', m: 'Japan' },
      { w: '日本語', r: 'nihongo', m: 'Japanese language' },
      { w: '勉強', r: 'benkyou', m: 'study' }
    ]}
  ]
};

// Kana readings for practice
const KANA_READINGS = {
  'あ':'a','い':'i','う':'u','え':'e','お':'o',
  'か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko',
  'さ':'sa','し':'shi','す':'su','せ':'se','そ':'so',
  'た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to',
  'な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no',
  'は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho',
  'ま':'ma','み':'mi','む':'mu','め':'me','も':'mo',
  'や':'ya','ゆ':'yu','よ':'yo',
  'ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro',
  'わ':'wa','を':'wo','ん':'n',
  'ア':'a','イ':'i','ウ':'u','エ':'e','オ':'o',
  'カ':'ka','キ':'ki','ク':'ku','ケ':'ke','コ':'ko',
  'サ':'sa','シ':'shi','ス':'su','セ':'se','ソ':'so',
  'タ':'ta','チ':'chi','ツ':'tsu','テ':'te','ト':'to',
  'ナ':'na','ニ':'ni','ヌ':'nu','ネ':'ne','ノ':'no',
  'ハ':'ha','ヒ':'hi','フ':'fu','ヘ':'he','ホ':'ho',
  'マ':'ma','ミ':'mi','ム':'mu','メ':'me','モ':'mo',
  'ヤ':'ya','ユ':'yu','ヨ':'yo',
  'ラ':'ra','リ':'ri','ル':'ru','レ':'re','ロ':'ro',
  'ワ':'wa','ヲ':'wo','ン':'n'
};
