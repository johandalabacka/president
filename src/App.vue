<template>
  <div class="app">
    <Transition name="fade" mode="out-in">
      <StartView v-if="state === 'start'" class="view" />
      <RulingView v-else-if="state === 'ruling'" :key="key" class="view" />
      <LostView v-else-if="state === 'lost'" class="view" />
    </Transition>
  </div>
</template>

<script>
import { useGameStore } from './stores/gameStore.js'
import StartView from './components/StartView.vue'
import RulingView from './components/RulingView.vue'
import LostView from './components/LostView.vue'

export default {
  components: {
    StartView,
    RulingView,
    LostView
  },
  computed: {
    state () {
      return useGameStore().state
    },
    key () {
      return useGameStore().date
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
