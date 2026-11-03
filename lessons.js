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
  ],
  apprentice: [
    { id: 'kanji-16', name: 'Set 16', type: 'kanji', items: [{ k: '見', r: 'み', m: 'to see' }, { k: '行', r: 'い', m: 'to go' }, { k: '来', r: 'く', m: 'to come' }]},
    { id: 'kanji-17', name: 'Set 17', type: 'kanji', items: [{ k: '食', r: 'た', m: 'to eat' }, { k: '飲', r: 'の', m: 'to drink' }, { k: '話', r: 'はな', m: 'to speak' }]},
    { id: 'kanji-18', name: 'Set 18', type: 'kanji', items: [{ k: '読', r: 'よ', m: 'to read' }, { k: '書', r: 'か', m: 'to write' }, { k: '聞', r: 'き', m: 'to listen' }]},
    { id: 'kanji-19', name: 'Set 19', type: 'kanji', items: [{ k: '買', r: 'か', m: 'to buy' }, { k: '売', r: 'う', m: 'to sell' }, { k: '待', r: 'ま', m: 'to wait' }]},
    { id: 'kanji-20', name: 'Set 20', type: 'kanji', items: [{ k: '立', r: 'た', m: 'to stand' }, { k: '座', r: 'すわ', m: 'to sit' }, { k: '歩', r: 'ある', m: 'to walk' }]},
    { id: 'kanji-21', name: 'Set 21', type: 'kanji', items: [{ k: '走', r: 'はし', m: 'to run' }, { k: '休', r: 'やす', m: 'to rest' }, { k: '起', r: 'お', m: 'to wake up' }]},
    { id: 'kanji-22', name: 'Set 22', type: 'kanji', items: [{ k: '寝', r: 'ね', m: 'to sleep' }, { k: '思', r: 'おも', m: 'to think' }, { k: '知', r: 'し', m: 'to know' }]},
    { id: 'kanji-23', name: 'Set 23', type: 'kanji', items: [{ k: '学', r: 'まな', m: 'to learn' }, { k: '教', r: 'おし', m: 'to teach' }, { k: '働', r: 'はたら', m: 'to work' }]},
    { id: 'kanji-24', name: 'Set 24', type: 'kanji', items: [{ k: '作', r: 'つく', m: 'to make' }, { k: '使', r: 'つか', m: 'to use' }, { k: '持', r: 'も', m: 'to hold' }]},
    { id: 'kanji-25', name: 'Set 25', type: 'kanji', items: [{ k: '開', r: 'あ', m: 'to open' }, { k: '閉', r: 'し', m: 'to close' }, { k: '入', r: 'はい', m: 'to enter' }]},
    { id: 'kanji-26', name: 'Set 26', type: 'kanji', items: [{ k: '出', r: 'で', m: 'to exit' }, { k: '会', r: 'あ', m: 'to meet' }, { k: '帰', r: 'かえ', m: 'to return' }]},
    { id: 'kanji-27', name: 'Set 27', type: 'kanji', items: [{ k: '乗', r: 'の', m: 'to ride' }, { k: '降', r: 'お', m: 'to get off' }, { k: '送', r: 'おく', m: 'to send' }]},
    { id: 'kanji-28', name: 'Set 28', type: 'kanji', items: [{ k: '届', r: 'とど', m: 'to deliver' }, { k: '受', r: 'う', m: 'to receive' }, { k: '渡', r: 'わた', m: 'to hand over' }]},
    { id: 'kanji-29', name: 'Set 29', type: 'kanji', items: [{ k: '始', r: 'はじ', m: 'to begin' }, { k: '終', r: 'お', m: 'to end' }, { k: '続', r: 'つづ', m: 'to continue' }]},
    { id: 'kanji-30', name: 'Set 30', type: 'kanji', items: [{ k: '止', r: 'と', m: 'to stop' }, { k: '変', r: 'か', m: 'to change' }, { k: '直', r: 'なお', m: 'to fix' }]},
    { id: 'vocab-16', name: 'Work', type: 'vocab', items: [{ w: '仕事', r: 'shigoto', m: 'work' }, { w: '会社', r: 'kaisha', m: 'company' }, { w: '給料', r: 'kyuuryou', m: 'salary' }]},
    { id: 'vocab-17', name: 'School', type: 'vocab', items: [{ w: '授業', r: 'jugyou', m: 'class' }, { w: '宿題', r: 'shukudai', m: 'homework' }, { w: '試験', r: 'shiken', m: 'exam' }]},
    { id: 'vocab-18', name: 'Travel', type: 'vocab', items: [{ w: '旅行', r: 'ryokou', m: 'travel' }, { w: '切符', r: 'kippu', m: 'ticket' }, { w: '駅', r: 'eki', m: 'station' }]},
    { id: 'vocab-19', name: 'Shopping', type: 'vocab', items: [{ w: '買い物', r: 'kaimono', m: 'shopping' }, { w: '値段', r: 'nedan', m: 'price' }, { w: '安い', r: 'yasui', m: 'cheap' }]},
    { id: 'vocab-20', name: 'Food', type: 'vocab', items: [{ w: '料理', r: 'ryouri', m: 'cooking' }, { w: '味', r: 'aji', m: 'taste' }, { w: '美味しい', r: 'oishii', m: 'delicious' }]},
    { id: 'vocab-21', name: 'Weather', type: 'vocab', items: [{ w: '天気', r: 'tenki', m: 'weather' }, { w: '雨', r: 'ame', m: 'rain' }, { w: '晴れ', r: 'hare', m: 'sunny' }]},
    { id: 'vocab-22', name: 'Body', type: 'vocab', items: [{ w: '体', r: 'karada', m: 'body' }, { w: '頭', r: 'atama', m: 'head' }, { w: '顔', r: 'kao', m: 'face' }]},
    { id: 'vocab-23', name: 'Clothes', type: 'vocab', items: [{ w: '服', r: 'fuku', m: 'clothes' }, { w: 'シャツ', r: 'shatsu', m: 'shirt' }, { w: '靴', r: 'kutsu', m: 'shoes' }]},
    { id: 'vocab-24', name: 'Colors', type: 'vocab', items: [{ w: '色', r: 'iro', m: 'color' }, { w: '赤', r: 'aka', m: 'red' }, { w: '青', r: 'ao', m: 'blue' }]},
    { id: 'vocab-25', name: 'Numbers', type: 'vocab', items: [{ w: '万', r: 'man', m: 'ten thousand' }, { w: '円', r: 'en', m: 'yen' }, { w: '番', r: 'ban', m: 'number' }]},
    { id: 'vocab-26', name: 'Time', type: 'vocab', items: [{ w: '時間', r: 'jikan', m: 'time' }, { w: '週', r: 'shuu', m: 'week' }, { w: '月', r: 'tsuki', m: 'month' }]},
    { id: 'vocab-27', name: 'Places', type: 'vocab', items: [{ w: '場所', r: 'basho', m: 'place' }, { w: '町', r: 'machi', m: 'town' }, { w: '村', r: 'mura', m: 'village' }]},
    { id: 'vocab-28', name: 'Nature', type: 'vocab', items: [{ w: '自然', r: 'shizen', m: 'nature' }, { w: '海', r: 'umi', m: 'sea' }, { w: '空', r: 'sora', m: 'sky' }]},
    { id: 'vocab-29', name: 'Animals', type: 'vocab', items: [{ w: '動物', r: 'doubutsu', m: 'animal' }, { w: '犬', r: 'inu', m: 'dog' }, { w: '猫', r: 'neko', m: 'cat' }]},
    { id: 'vocab-30', name: 'Feelings', type: 'vocab', items: [{ w: '気持ち', r: 'kimochi', m: 'feeling' }, { w: '嬉しい', r: 'ureshii', m: 'happy' }, { w: '悲しい', r: 'kanashii', m: 'sad' }]},
    { id: 'sent-1', name: 'S1', type: 'vocab', items: [{ w: 'これは本です', r: 'kore wa hon desu', m: 'this is a book' }, { w: 'それはペンです', r: 'sore wa pen desu', m: 'that is a pen' }]},
    { id: 'sent-2', name: 'S2', type: 'vocab', items: [{ w: '私は学生です', r: 'watashi wa gakusei desu', m: 'I am a student' }, { w: '彼は先生です', r: 'kare wa sensei desu', m: 'he is a teacher' }]},
    { id: 'sent-3', name: 'S3', type: 'vocab', items: [{ w: '今日は月曜日です', r: 'kyou wa getsuyoubi desu', m: 'today is Monday' }, { w: '明日は火曜日です', r: 'ashita wa kayoubi desu', m: 'tomorrow is Tuesday' }]},
    { id: 'sent-4', name: 'S4', type: 'vocab', items: [{ w: '天気がいいです', r: 'tenki ga ii desu', m: 'the weather is good' }, { w: '雨が降っています', r: 'ame ga futte imasu', m: 'it is raining' }]},
    { id: 'sent-5', name: 'S5', type: 'vocab', items: [{ w: 'ご飯を食べます', r: 'gohan o tabemasu', m: 'I eat a meal' }, { w: '水を飲みます', r: 'mizu o nomimasu', m: 'I drink water' }]},
    { id: 'sent-6', name: 'S6', type: 'vocab', items: [{ w: '学校に行きます', r: 'gakkou ni ikimasu', m: 'I go to school' }, { w: '家に帰ります', r: 'ie ni kaerimasu', m: 'I go home' }]},
    { id: 'sent-7', name: 'S7', type: 'vocab', items: [{ w: '友達と話します', r: 'tomodachi to hanashimasu', m: 'I talk with a friend' }, { w: '母に電話します', r: 'haha ni denwa shimasu', m: 'I call my mother' }]},
    { id: 'sent-8', name: 'S8', type: 'vocab', items: [{ w: '日本語を勉強します', r: 'nihongo o benkyou shimasu', m: 'I study Japanese' }, { w: '漢字を覚えます', r: 'kanji o oboemasu', m: 'I memorize kanji' }]},
    { id: 'sent-9', name: 'S9', type: 'vocab', items: [{ w: '映画を見ます', r: 'eiga o mimasu', m: 'I watch a movie' }, { w: '音楽を聞きます', r: 'ongaku o kikimasu', m: 'I listen to music' }]},
    { id: 'sent-10', name: 'S10', type: 'vocab', items: [{ w: '買い物に行きます', r: 'kaimono ni ikimasu', m: 'I go shopping' }, { w: 'パンを買います', r: 'pan o kaimasu', m: 'I buy bread' }]},
    { id: 'sent-11', name: 'S11', type: 'vocab', items: [{ w: '朝ごはんを食べました', r: 'asagohan o tabemashita', m: 'I ate breakfast' }, { w: '昼ごはんを作りました', r: 'hirugohan o tsukurimashita', m: 'I made lunch' }]},
    { id: 'sent-12', name: 'S12', type: 'vocab', items: [{ w: '電車に乗ります', r: 'densha ni norimasu', m: 'I ride the train' }, { w: 'バスを降ります', r: 'basu o orimasu', m: 'I get off the bus' }]},
    { id: 'sent-13', name: 'S13', type: 'vocab', items: [{ w: '病院に行きます', r: 'byouin ni ikimasu', m: 'I go to the hospital' }, { w: '薬を飲みます', r: 'kusuri o nomimasu', m: 'I take medicine' }]},
    { id: 'sent-14', name: 'S14', type: 'vocab', items: [{ w: '手紙を書きます', r: 'tegami o kakimasu', m: 'I write a letter' }, { w: 'メールを送ります', r: 'meeru o okurimasu', m: 'I send an email' }]},
    { id: 'sent-15', name: 'S15', type: 'vocab', items: [{ w: '窓を開けます', r: 'mado o akemasu', m: 'I open the window' }, { w: 'ドアを閉めます', r: 'doa o shimemasu', m: 'I close the door' }]},
    { id: 'sent-16', name: 'S16', type: 'vocab', items: [{ w: '新しい服を買いました', r: 'atarashii fuku o kaimashita', m: 'I bought new clothes' }, { w: '古い本を読みました', r: 'furui hon o yomimashita', m: 'I read an old book' }]},
    { id: 'sent-17', name: 'S17', type: 'vocab', items: [{ w: '日本語が好きです', r: 'nihongo ga suki desu', m: 'I like Japanese' }, { w: '数学が苦手です', r: 'suugaku ga nigate desu', m: 'I am bad at math' }]},
    { id: 'sent-18', name: 'S18', type: 'vocab', items: [{ w: '時間があります', r: 'jikan ga arimasu', m: 'I have time' }, { w: 'お金がありません', r: 'okane ga arimasen', m: 'I do not have money' }]},
    { id: 'sent-19', name: 'S19', type: 'vocab', items: [{ w: 'ここで待ちます', r: 'koko de machimasu', m: 'I will wait here' }, { w: 'あそこで会いましょう', r: 'asoko de aimashou', m: 'let us meet over there' }]},
    { id: 'sent-20', name: 'S20', type: 'vocab', items: [{ w: '何を食べますか', r: 'nani o tabemasu ka', m: 'what will you eat' }, { w: 'いつ来ますか', r: 'itsu kimasu ka', m: 'when will you come' }]}
  ]
};

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
