<template>
  <div>
    <StatusBar />
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

<script>
import { useGameStore } from '../stores/gameStore.js'
import StatusBar from './StatusBar.vue'

export default {
  components: {
    StatusBar
  },
  computed: {
    game () {
      return useGameStore()
    }
  },
  methods: {
    startGame () {
      useGameStore().init()
    }
  }
}
</script>
