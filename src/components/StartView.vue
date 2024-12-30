<template>
  <div>
    <p>
      You are the newly elected president of a country that
      has been hit hard by civil war, famine and corruption.
      You have promised the people that you will change the country and make it a better
      place for everyone. But the military, the people, the internationl community and the economic sector can both
      support and oppose you. You must make difficult decisions and balance between
      different interests to succeed. If you fail, you can be deposed, imprisoned or even killed.
      Good luck!
    </p>
    <button type="button" @click="startGame">
      Start
    </button>
  </div>
</template>

<script setup>
import { useGameStore } from '../stores/gameStore.js'

function startGame () {
  useGameStore().start()
}
</script>
