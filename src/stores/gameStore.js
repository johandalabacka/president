import { defineStore, acceptHMRUpdate } from 'pinia'
import questions from '../questions.js'
import deaths from '../deaths.js'

export const useGameStore = defineStore('game', {

  state: () => ({
    currentDate: new Date(),
    state: 'start', // start, ruling, lost
    questions,
    deaths,
    currentQuestion: 0,
    military: 50,
    church: 50,
    parliment: 50,
    industry: 50,
    lostReason: ''
  }),

  getters: {
    isDead: (state) => state.status === 'dead',
    isAlive: (state) => state.status !== 'dead',
    date: (state) => state.currentDate.toDateString()
  },
  actions: {
    init () {
      this.$reset()
      /* this.years = 0
      this.state = 'start'
      this.currentQuestion = 0
      this.military = 50
      this.church = 50
      this.parliment = 50
      this.industry = 50
      this.lostReason = '' */
    },
    start () {
      this.state = 'ruling'
      this.nextYear()
    },
    nextYear () {
      this.currentDate = new Date(this.currentDate.getTime() + 1000 * 60 * 60 * 24 * Math.floor(364 * Math.random() + 1))
      this.currentQuestion = Math.floor(Math.random() * this.questions.length)
    },
    answer (answer) {
      if (answer === 'yes') {
        const yes = this.questions[this.currentQuestion].yes

        this.military += yes[0]
        this.church += yes[1]
        this.parliment += yes[2]
        this.industry += yes[3]
      } else {
        const no = this.questions[this.currentQuestion].no

        this.military += no[0]
        this.church += no[1]
        this.parliment += no[2]
        this.industry += no[3]
      }

      if (this.military < 0) {
        const min = this.deaths.military.min
        this.state = 'lost'
        this.lostReason = min[Math.floor(Math.random() * min.length)]
      } else if (this.military > 100) {
        const max = this.deaths.military.max
        this.state = 'lost'
        this.lostReason = max[Math.floor(Math.random() * max.length)]
      } else if (this.church < 0) {
        const min = this.deaths.church.min
        this.state = 'lost'
        this.lostReason = min[Math.floor(Math.random() * min.length)]
      } else if (this.church > 100) {
        const max = this.deaths.church.max
        this.state = 'lost'
        this.lostReason = max[Math.floor(Math.random() * max.length)]
      } else if (this.parliment < 0) {
        const min = this.deaths.parliment.min
        this.state = 'lost'
        this.lostReason = min[Math.floor(Math.random() * min.length)]
      } else if (this.parliment > 100) {
        const max = this.deaths.parliment.max
        this.state = 'lost'
        this.lostReason = max[Math.floor(Math.random() * max.length)]
      } else if (this.industry < 0) {
        const min = this.deaths.industry.min
        this.state = 'lost'
        this.lostReason = min[Math.floor(Math.random() * min.length)]
      } else if (this.industry > 100) {
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
