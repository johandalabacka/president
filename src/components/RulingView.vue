<template>
  <div>
    <div>M {{ game.military }} &dot; C {{ game.church }} &dot; P {{ game.parliment }} &dot; I {{ game.industry }} </div>
    <div class="date">
      {{ game.date }}
    </div>
    <p>{{ question }}</p>
    <div class="buttons">
      <button class="yes" type="button" @click="answerQuestion('yes')">
        Ja
      </button>
      <button class="no" type="button" @click="answerQuestion('no')">
        Nej
      </button>
    </div>
  </div>
</template>

<script>
import { useGameStore } from '../stores/gameStore.js'

export default {
  computed: {
    game () {
      return useGameStore()
    },
    question () {
      return this.game.questions[this.game.currentQuestion].q
    }
  },
  methods: {
    answerQuestion (answer) {
      this.game.answer(answer)
      if (this.game.isAlive) {
        this.game.nextYear()
      }
    }
  }
}
</script>
