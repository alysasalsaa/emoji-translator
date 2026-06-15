<template>
  <div class="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-start py-10 px-4 gap-6">

    <!-- Header -->
    <div class="text-center">
      <h1 class="text-4xl font-black tracking-tight">😄 Emoji Translator</h1>
      <p class="text-slate-400 text-sm mt-2">Type any text and watch it transform into emojis!</p>
    </div>

    <!-- Main card -->
    <div class="w-full max-w-2xl bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col gap-5">

      <!-- Language selector -->
      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-bold text-slate-400 uppercase tracking-wider">Language</label>
        <select v-model="language" class="bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 transition">
          <option value="en">🇺🇸 English</option>
          <option value="id">🇮🇩 Indonesian</option>
          <option value="es">🇪🇸 Spanish</option>
          <option value="fr">🇫🇷 French</option>
        </select>
      </div>

      <!-- Input -->
      <div class="flex flex-col gap-1.5">
        <label class="text-xs font-bold text-slate-400 uppercase tracking-wider">Input Text</label>
        <textarea
          v-model="inputText"
          placeholder="Type something... e.g. I love pizza and coffee"
          rows="4"
          class="bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition resize-none placeholder-slate-500"
        ></textarea>
        <p v-if="warning" class="text-yellow-400 text-xs font-semibold">⚠️ {{ warning }}</p>
      </div>

      <!-- Buttons -->
      <div class="flex gap-3">
        <button
          @click="translate"
          class="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
        >
          Translate 🚀
        </button>
        <button
          @click="clear"
          class="bg-slate-700 hover:bg-slate-600 text-white font-bold px-6 py-3 rounded-xl transition"
        >
          Clear
        </button>
      </div>

      <!-- Output -->
      <div v-if="outputText !== null" class="flex flex-col gap-1.5">
        <label class="text-xs font-bold text-slate-400 uppercase tracking-wider">Emoji Output</label>
        <div class="bg-slate-900 border border-indigo-500/30 rounded-xl px-4 py-3 text-lg min-h-20 leading-relaxed break-words">
          {{ outputText }}
        </div>
        <div class="flex justify-between items-center">
          <span class="text-xs text-slate-500">{{ translatedCount }} word(s) translated</span>
          <button @click="copyOutput" class="text-xs text-indigo-400 hover:text-indigo-300 font-semibold transition">
            {{ copied ? '✓ Copied!' : '📋 Copy' }}
          </button>
        </div>
      </div>

    </div>

    <!-- Word map -->
    <div class="w-full max-w-2xl">
      <button @click="showMap = !showMap" class="w-full bg-slate-800 border border-slate-700 hover:border-indigo-500 rounded-xl px-4 py-3 text-sm font-semibold text-slate-400 hover:text-white transition text-left flex justify-between items-center">
        <span>📖 Browse Emoji Dictionary ({{ Object.keys(emojiMap).length }} words)</span>
        <span>{{ showMap ? '▲' : '▼' }}</span>
      </button>

      <div v-if="showMap" class="mt-2 bg-slate-800 border border-slate-700 rounded-xl p-4">
        <input
          v-model="dictSearch"
          placeholder="Search dictionary..."
          class="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm mb-3 focus:outline-none focus:border-indigo-500"
        />
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-60 overflow-y-auto">
          <div
            v-for="(emoji, word) in filteredMap"
            :key="word"
            @click="insertWord(word)"
            class="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 cursor-pointer hover:border-indigo-500 transition"
          >
            <span class="text-lg">{{ emoji }}</span>
            <span class="text-xs text-slate-300 truncate">{{ word }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useEmojiMap } from '../composables/useEmojiMap.js'

const { translate: translateText, emojiMap } = useEmojiMap()

const inputText     = ref('')
const outputText    = ref(null)
const warning       = ref('')
const language      = ref('en')
const copied        = ref(false)
const showMap       = ref(false)
const dictSearch    = ref('')
const translatedCount = ref(0)
const lastTranslated  = ref('')

const filteredMap = computed(() => {
  if (!dictSearch.value) return emojiMap
  const q = dictSearch.value.toLowerCase()
  return Object.fromEntries(
    Object.entries(emojiMap).filter(([k]) => k.includes(q))
  )
})

function translate() {
  warning.value = ''

  if (!inputText.value.trim()) {
    warning.value = 'Please enter some text before translating.'
    return
  }

  if (inputText.value === lastTranslated.value) {
    warning.value = 'Text is unchanged from the last translation.'
    return
  }

  const result = translateText(inputText.value, language.value)
  outputText.value = result
  lastTranslated.value = inputText.value

  // Count translated words
  const words = inputText.value.toLowerCase().split(/\s+/)
  translatedCount.value = words.filter(w => emojiMap[w.replace(/[^\w]/g, '')] || emojiMap[w]).length
}

function clear() {
  inputText.value    = ''
  outputText.value   = null
  warning.value      = ''
  lastTranslated.value = ''
  translatedCount.value = 0
}

function copyOutput() {
  if (!outputText.value) return
  navigator.clipboard.writeText(outputText.value).then(() => {
    copied.value = true
    setTimeout(() => copied.value = false, 1500)
  })
}

function insertWord(word) {
  inputText.value += (inputText.value ? ' ' : '') + word
}
</script>