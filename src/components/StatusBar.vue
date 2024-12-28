<template>
  <div class="status-bar">
    <StatusIcon :icon="faPersonMilitaryRifle" :level="game.military" />
    <StatusIcon :icon="faPerson" :level="game.publicOpinion" />
    <StatusIcon :icon="faGlobe" :level="game.world" />
    <StatusIcon :icon="faIndustry" :level="game.industry" />
  </div>
</template>

<script>
import {
  faPersonMilitaryRifle,
  faPerson,
  faGlobe,
  faIndustry,
  faSkull
} from '@fortawesome/free-solid-svg-icons'

import { useGameStore } from '../stores/gameStore.js'
import StatusIcon from './StatusIcon.vue'

export default {
  components: {
    StatusIcon
  },
  computed: {
    game () {
      return useGameStore()
    },
    faPersonMilitaryRifle () {
      return faPersonMilitaryRifle
    },
    faPerson () {
      return faPerson
    },
    faGlobe () {
      return faGlobe
    },
    faIndustry () {
      return faIndustry
    },
    faSkull () {
      return faSkull
    }
  }
}
</script>

<style scoped>
.status-bar {
  text-align: center;
  width:100%;
  padding: 0.25em;
}
</style>
