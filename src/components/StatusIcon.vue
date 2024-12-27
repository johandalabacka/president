<template>
  <span class="status-icon">
    <FontAwesomeIcon :class="levelClass" :icon="icon" />
    <template v-if="level <= 0 || level >= 100">
      <FontAwesomeIcon :class="levelClass" :icon="faSkull" />
    </template>
    {{ level }} <!-- only debugging maybe -->
  </span>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'StatusIcon',
  components: {
    FontAwesomeIcon
  },
  props: {
    icon: {
      type: Object,
      required: true
    },
    level: {
      type: Number,
      required: true
    }
  },
  computed: {
    faSkull () {
      return faSkull
    },
    levelClass () {
      if (this.level <= 20) {
        return 'c0-20'
      } else if (this.level <= 40) {
        return 'c21-40'
      } else if (this.level <= 60) {
        return 'c41-60'
      } else if (this.level >= 80) {
        return 'c61-80'
      } else {
        return 'C81-100'
      }
    }
  }
}
</script>

<style scoped>
  .c0-20 {
    color: red;
  }
  .c21-40 {
    color: orange;
  }
  .c41-60 {
    color: yellow;
  }
  .c61-80 {
    color: green;
  }
  .c81-100 {
    color: blue;
  }
</style>
