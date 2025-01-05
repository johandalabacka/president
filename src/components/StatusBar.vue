<template>
  <div class="status-bar">
    <StatusIcon :icon="faPersonMilitaryRifle" :level="game.military" />&nbsp;
    <StatusIcon :icon="faPerson" :level="game.publicOpinion" />&nbsp;
    <StatusIcon :icon="faGlobe" :level="game.world" />&nbsp;
    <StatusIcon :icon="faIndustry" :level="game.industry" />
  </div>
</template>

<script setup>
import {
  faPersonMilitaryRifle,
  faPerson,
  faGlobe,
  faIndustry
} from '@fortawesome/free-solid-svg-icons'

import { useGameStore } from '../stores/gameStore.js'
import StatusIcon from './StatusIcon.vue'

const game = useGameStore()
</script>

<style scoped>
.status-bar {
  text-align: center;
  width:100%;
  padding: 0.25em;
}
</style>
