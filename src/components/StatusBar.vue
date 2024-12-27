<template>
  <div class="status-bar">
    <FontAwesomeIcon :icon="faPersonMilitaryRifle" />
    {{ game.military }} &nbsp;
    <FontAwesomeIcon :icon="faPerson" />
    {{ game.publicOpionion }} &nbsp;
    <FontAwesomeIcon :icon="faGlobe" />
    {{ game.world }} &nbsp;
    <FontAwesomeIcon :icon="faIndustry" />
    {{ game.industry }}
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPersonMilitaryRifle,
  faPerson,
  faGlobe,
  faIndustry
} from '@fortawesome/free-solid-svg-icons'

import { useGameStore } from '../stores/gameStore.js'

export default {
  components: {
    FontAwesomeIcon
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
    }
  }
}
</script>

<style scoped>
.status-bar {
  position:fixed;
  top:0;
  text-align: center;
  width:100%;
  z-index:100;
  margin: 0.25em;
}
</style>
