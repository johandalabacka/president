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

<script setup>
import { useGameStore } from '../stores/gameStore.js'

const game = useGameStore()
const question = game.question

function answerQuestion (answer) {
  game.answer(answer)
  if (game.isAlive) {
    game.nextYear()
  }
}
</script>
