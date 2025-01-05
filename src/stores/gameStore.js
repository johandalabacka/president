import { defineStore, acceptHMRUpdate } from 'pinia'
import questions from '../questions.js'
import deaths from '../deaths.js'
import names from '../names.js'

function sumByKey (array, key) {
  return array.reduce((acc, item) => acc + item[key], 0)
}
/**
 *
 * @param {{[key]: number}} array
 * @param {string} key
 * @param {*} totalPropability
 * @returns
 */
function pickByPropability (array, key) {
  const sumPropability = sumByKey(array, 'propability')
  const r = Math.random() * sumPropability
  let acc = 0
  let index = 0
  for (const item of array) {
    acc += item[key]
    if (r < acc) {
      return [item, index]
    }
    index++
  }
  return [array.at(-1), index]
}

function randomArray (array) {
  const a = [...array]
  const newArray = []
  while (a.length > 0) {
    const i = Math.floor(Math.random() * a.length)
    newArray.push(a.splice(i, 1)[0])
  }
  return newArray
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const useGameStore = defineStore('game', {

  state: () => ({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    monthsInPower: 0,
    countMonths: 0,
    state: 'start', // start, ruling, lost
    // A copy of the questions array so we can modify it
    questions: [...questions.filter(q => !q.tag)],
    totalPropability: 0,
    deaths,
    currentQuestion: 0,
    military: 50,
    publicOpinion: 50,
    world: 50,
    industry: 50,
    lostReason: '',
    names: {}
  }),

  getters: {
    isDead: (state) => state.status === 'dead',
    isAlive: (state) => state.status !== 'dead',
    date: (state) => `${months[state.month]} ${state.year}`,
    question (state) {
      const question = state.currentQuestion.q
      // At least 3 capital letters eventually followed by a number
      return question.replace(/([A-Z]{3,})(\d*)/g, (_, key, index) => {
        const keyLower = key.toLowerCase()
        const namesForKey = this.names[keyLower]
        if (!namesForKey || namesForKey.length === 0) {
          return `<span class="${keyLower}">${key}</span>`
        }
        if (index === '') {
          const name = namesForKey[Math.floor(Math.random() * namesForKey.length)]
          return `<span class="${keyLower}">${name}</span>`
        } else {
          const i = parseInt(index)
          return `<span class="${keyLower}">${namesForKey[i - 1]}</span>`
        }
      })
    }
  },
  actions: {
    init () {
      this.$reset()
    },
    start () {
      this.state = 'ruling'
      this.randomizeNames()
      this.nextYear()
    },
    nextYear () {
      this.monthsInPower++
      if (this.month === 11) {
        this.year++
        this.month = 0
      } else {
        this.month++
      }
      const [question, index] = pickByPropability(this.questions, 'propability')
      this.questions.splice(index, 1)
      this.currentQuestion = question
    },
    answer (answer) {
      if (answer === 'yes') {
        const yes = this.currentQuestion.yes
        yes(this)
      } else {
        const no = this.currentQuestion.no
        no(this)
      }

      if (this.military <= 0) {
        const min = this.deaths.military.min
        this.state = 'lost'
        this.lostReason = min[Math.floor(Math.random() * min.length)]
      } else if (this.military >= 100) {
        const max = this.deaths.military.max
        this.state = 'lost'
        this.lostReason = max[Math.floor(Math.random() * max.length)]
      } else if (this.publicOpinion <= 0) {
        const min = this.deaths.publicOpinion.min
        this.state = 'lost'
        this.lostReason = min[Math.floor(Math.random() * min.length)]
      } else if (this.publicOpinion >= 100) {
        const max = this.deaths.publicOpinion.max
        this.state = 'lost'
        this.lostReason = max[Math.floor(Math.random() * max.length)]
      } else if (this.world <= 0) {
        const min = this.deaths.world.min
        this.state = 'lost'
        this.lostReason = min[Math.floor(Math.random() * min.length)]
      } else if (this.world >= 100) {
        const max = this.deaths.world.max
        this.state = 'lost'
        this.lostReason = max[Math.floor(Math.random() * max.length)]
      } else if (this.industry <= 0) {
        const min = this.deaths.industry.min
        this.state = 'lost'
        this.lostReason = min[Math.floor(Math.random() * min.length)]
      } else if (this.industry >= 100) {
        const max = this.deaths.industry.max
        this.state = 'lost'
        this.lostReason = max[Math.floor(Math.random() * max.length)]
      }
    },
    addByTag (tag) {
      const taggedQuestions = questions.filter(q => q.tag === tag)
      for (const question of taggedQuestions) {
        this.questions.push(question)
      }
    },
    randomizeNames () {
      for (const key in names) {
        this.names[key] = randomArray(names[key])
      }
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
}
