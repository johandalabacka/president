<template>
  <span class="status-icon">
    <FontAwesomeIcon :icon="icon" />
    <template v-if="level <= 0 || level >= 100">
      <FontAwesomeIcon :icon="faSkull" />
    </template>
    <div v-else class="statusbar">
      <div :style="{width: `${level}%`}" />
    </div>
    {{ level }} <!-- only debugging maybe -->
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
</script>

<style scoped>
  .statusbar {
    display: inline-block;
    width: 1rem;
    height: 0.5rem;
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
