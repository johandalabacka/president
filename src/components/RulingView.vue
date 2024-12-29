<template>
  <div>
    <div class="date">
      {{ game.date }}
    </div>
    <p>{{ question }}</p>
    <div class="buttons">
      <button class="yes" type="button" @click="answerQuestion('yes')">
        Yes
      </button>
      <button class="no" type="button" @click="answerQuestion('no')">
        No
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
      return this.game.question
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
