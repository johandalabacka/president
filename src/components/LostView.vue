<template>
  <div>
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
    lostReason () {
      return useGameStore().lostReason
    }
  },
  methods: {
    startGame () {
      useGameStore().init()
    }
  }
}
</script>
