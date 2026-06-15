export function useEmojiMap() {
  const emojiMap = {
    // Emotions
    'happy': '😊', 'sad': '😢', 'angry': '😠', 'love': '❤️',
    'excited': '🤩', 'surprised': '😲', 'scared': '😨', 'cool': '😎',
    'crying': '😭', 'laughing': '😂', 'smile': '😊', 'wink': '😉',
    'kiss': '😘', 'heart': '❤️', 'broken heart': '💔', 'tired': '😴',
    'sick': '🤒', 'crazy': '🤪', 'thinking': '🤔', 'shrug': '🤷',

    // People & Actions
    'run': '🏃', 'walk': '🚶', 'dance': '💃', 'swim': '🏊',
    'sleep': '😴', 'eat': '🍽️', 'drink': '🥤', 'cook': '👨‍🍳',
    'read': '📖', 'write': '✍️', 'work': '💼', 'study': '📚',
    'play': '🎮', 'sing': '🎤', 'listen': '🎧', 'watch': '👀',
    'pray': '🙏', 'clap': '👏', 'wave': '👋', 'point': '👉',
    'thumbs up': '👍', 'thumbs down': '👎', 'ok': '👌', 'peace': '✌️',

    // Nature
    'sun': '☀️', 'moon': '🌙', 'star': '⭐', 'cloud': '☁️',
    'rain': '🌧️', 'snow': '❄️', 'wind': '💨', 'fire': '🔥',
    'water': '💧', 'earth': '🌍', 'tree': '🌳', 'flower': '🌸',
    'rose': '🌹', 'leaf': '🍃', 'mountain': '⛰️', 'beach': '🏖️',
    'ocean': '🌊', 'rainbow': '🌈', 'lightning': '⚡', 'tornado': '🌪️',

    // Animals
    'dog': '🐶', 'cat': '🐱', 'bird': '🐦', 'fish': '🐟',
    'horse': '🐴', 'cow': '🐮', 'pig': '🐷', 'rabbit': '🐰',
    'bear': '🐻', 'lion': '🦁', 'tiger': '🐯', 'monkey': '🐒',
    'snake': '🐍', 'elephant': '🐘', 'penguin': '🐧', 'dolphin': '🐬',
    'wolf': '🐺', 'fox': '🦊', 'deer': '🦌', 'owl': '🦉',

    // Food & Drinks
    'pizza': '🍕', 'burger': '🍔', 'sushi': '🍣', 'cake': '🎂',
    'coffee': '☕', 'tea': '🍵', 'beer': '🍺', 'wine': '🍷',
    'apple': '🍎', 'banana': '🍌', 'grape': '🍇', 'strawberry': '🍓',
    'bread': '🍞', 'rice': '🍚', 'noodle': '🍜', 'taco': '🌮',
    'ice cream': '🍦', 'chocolate': '🍫', 'candy': '🍬', 'cookie': '🍪',
    'donut': '🍩', 'egg': '🥚', 'cheese': '🧀', 'milk': '🥛',

    // Places & Travel
    'home': '🏠', 'school': '🏫', 'hospital': '🏥', 'office': '🏢',
    'car': '🚗', 'bus': '🚌', 'plane': '✈️', 'train': '🚂',
    'boat': '🚢', 'bike': '🚲', 'rocket': '🚀', 'city': '🌆',
    'map': '🗺️', 'flag': '🚩', 'road': '🛣️', 'bridge': '🌉',

    // Objects
    'phone': '📱', 'computer': '💻', 'camera': '📷', 'book': '📚',
    'money': '💰', 'gift': '🎁', 'key': '🔑', 'lock': '🔒',
    'clock': '⏰', 'calendar': '📅', 'mail': '📧', 'music': '🎵',
    'ball': '⚽', 'trophy': '🏆', 'medal': '🏅', 'crown': '👑',
    'diamond': '💎', 'ring': '💍', 'light': '💡', 'pencil': '✏️',
    'scissors': '✂️', 'hammer': '🔨', 'gun': '🔫', 'bomb': '💣',
    'pill': '💊', 'syringe': '💉', 'microscope': '🔬', 'telescope': '🔭',

    // Symbols & Others
    'check': '✅', 'cross': '❌', 'warning': '⚠️', 'question': '❓',
    'exclamation': '❗', 'plus': '➕', 'minus': '➖', 'infinity': '♾️',
    'recycle': '♻️', 'sos': '🆘', 'new': '🆕', 'free': '🆓',
    'good': '👍', 'bad': '👎', 'yes': '✅', 'no': '❌',
    'hot': '🔥', 'cold': '🧊', 'fast': '⚡', 'slow': '🐢',
    'big': '🔝', 'small': '🔹', 'up': '⬆️', 'down': '⬇️',
    'left': '⬅️', 'right': '➡️', 'stop': '🛑', 'go': '🟢',

    // Synonyms & Common words
    'like': '❤️', 'dislike': '👎', 'great': '👍', 'awesome': '🤩',
    'beautiful': '😍', 'ugly': '🤢', 'funny': '😂', 'boring': '😑',
    'strong': '💪', 'weak': '😩', 'smart': '🧠', 'stupid': '🤦',
    'rich': '💰', 'poor': '😢', 'old': '👴', 'young': '👶',
    'man': '👨', 'woman': '👩', 'baby': '👶', 'family': '👨‍👩‍👧‍👦',
    'friend': '👫', 'boss': '👔', 'doctor': '👨‍⚕️', 'teacher': '👨‍🏫',
    'party': '🎉', 'birthday': '🎂', 'wedding': '💒', 'graduation': '🎓',
    'christmas': '🎄', 'halloween': '🎃', 'easter': '🐣',
  }

  // Synonyms map
  const synonyms = {
    'happy': ['joy', 'joyful', 'glad', 'pleased', 'cheerful', 'delighted'],
    'sad': ['unhappy', 'miserable', 'depressed', 'upset', 'gloomy'],
    'angry': ['mad', 'furious', 'rage', 'annoyed', 'irritated'],
    'love': ['adore', 'like', 'crush', 'affection', 'fond'],
    'dog': ['puppy', 'doggy', 'hound', 'pup'],
    'cat': ['kitten', 'kitty', 'feline', 'kitty cat'],
    'car': ['vehicle', 'automobile', 'auto', 'truck', 'van'],
    'home': ['house', 'apartment', 'flat', 'dwelling', 'residence'],
    'money': ['cash', 'dollar', 'currency', 'coin', 'buck'],
    'food': ['meal', 'dish', 'cuisine', 'snack', 'lunch', 'dinner', 'breakfast'],
    'good': ['great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'best'],
    'bad': ['terrible', 'awful', 'horrible', 'worst', 'dreadful'],
    'big': ['large', 'huge', 'giant', 'massive', 'enormous'],
    'small': ['tiny', 'little', 'mini', 'miniature', 'petite'],
    'fast': ['quick', 'rapid', 'swift', 'speedy', 'hasty'],
    'work': ['job', 'labor', 'task', 'project', 'career'],
    'run': ['sprint', 'jog', 'dash', 'race'],
    'beautiful': ['pretty', 'gorgeous', 'lovely', 'cute', 'attractive'],
  }

  // Build reverse synonym map
  const reverseSynonyms = {}
  Object.entries(synonyms).forEach(([key, vals]) => {
    vals.forEach(v => { reverseSynonyms[v] = key })
  })

  function translate(text, language = 'en') {
    const words = text.split(/(\s+|[^\w\s])/)
    return words.map(token => {
      const clean = token.toLowerCase().trim()
      if (!clean || /^\s+$/.test(token)) return token
      // Direct match
      if (emojiMap[clean]) return emojiMap[clean]
      // Synonym match
      const synKey = reverseSynonyms[clean]
      if (synKey && emojiMap[synKey]) return emojiMap[synKey]
      return token
    }).join('')
  }

  return { translate, emojiMap }
}