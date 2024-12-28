import { defineStore, acceptHMRUpdate } from 'pinia'
import questions from '../questions.js'
import deaths from '../deaths.js'

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
    questions,
    deaths,
    currentQuestion: 0,
    military: 50,
    publicOpinion: 50,
    world: 50,
    industry: 50,
    lostReason: ''
  }),

  getters: {
    isDead: (state) => state.status === 'dead',
    isAlive: (state) => state.status !== 'dead',
    date: (state) => `${months[state.month]} ${state.year}`

  },
  actions: {
    init () {
      this.$reset()
    },
    start () {
      this.state = 'ruling'
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
      this.currentQuestion = Math.floor(Math.random() * this.questions.length)
    },
    answer (answer) {
      if (answer === 'yes') {
        const yes = this.questions[this.currentQuestion].yes
        yes(this)
      } else {
        const no = this.questions[this.currentQuestion].no
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
      } else if (this.publicOpionion <= 0) {
        const min = this.deaths.publicOpionion.min
        this.state = 'lost'
        this.lostReason = min[Math.floor(Math.random() * min.length)]
      } else if (this.publicOpionion >= 100) {
        const max = this.deaths.publicOpionion.max
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
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
}
