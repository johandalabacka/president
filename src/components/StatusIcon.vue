<template>
  <span class="status-icon">
    <FontAwesomeIcon :icon="icon" />
    <template v-if="level <= 0 || level >= 100">
      <FontAwesomeIcon :icon="faSkull" />
    </template>
    <div v-else class="statusbar">
      <div :style="{width: `${level}%`}" />
    </div>
    <template v-if="debugging">{{ level }}</template>
  </span>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'

defineProps({
  icon: {
    type: Object,
    required: true
  },
  level: {
    type: Number,
    required: true
  }
})

const debugging = import.meta.env.VITE_DEBUG === 'yes'

</script>

<style scoped>
  .statusbar {
    display: inline-block;
    width: 2rem;
    height: 0.4rem;
    border: 1px solid white;
    border-radius: 2px;
    background-color: transparent;
    margin: 2px;
  }

  .statusbar div {
    height: 100%;
    background-color: white;
  }
</style>
