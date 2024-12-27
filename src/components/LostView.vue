<template>
  <div>
    <div class="date">
      {{ game.date }}
    </div>
    <p> {{ lostReason }}</p>
    <button @click="startGame">
      Restart
    </button>
  </div>
</template>

<script>
import { useGameStore } from '../stores/gameStore.js'

export default {
  computed: {
    game () {
      return useGameStore()
    },
    lostReason () {
      return this.game.lostReason
    },
    date () {
      return this.game.date
    }
  },
  methods: {
    startGame () {
      useGameStore().init()
    }
  }
}
</script>
