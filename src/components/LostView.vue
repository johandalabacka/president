<template>
  <div>
    <div class="date">
      {{ game.date }}
    </div>
    <p> {{ game.lostReason }}</p>
    <p>You had {{ game.monthsInPower }} months in power.</p>
    <button @click="startGame">
      Restart
    </button>
  </div>
</template>

<script setup>
import { useGameStore } from '../stores/gameStore.js'
const game = useGameStore()

function startGame () {
  game.init()
}
</script>
