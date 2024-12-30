<template>
  <StatusBar />
  <div class="content">
    <Transition name="fade" mode="out-in">
      <StartView v-if="game.state === 'start'" class="view" />
      <RulingView v-else-if="game.state === 'ruling'" :key="game.date" class="view" />
      <LostView v-else-if="game.state === 'lost'" class="view" />
    </Transition>
  </div>
</template>

<script setup>
import { useGameStore } from './stores/gameStore.js'
import StartView from './components/StartView.vue'
import RulingView from './components/RulingView.vue'
import LostView from './components/LostView.vue'
import StatusBar from './components/StatusBar.vue'

const game = useGameStore()
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
