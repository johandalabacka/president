<template>
  <div>
    <p>
      Du är nyvald president i ett land som drabbats hårt av
      inbördeskrig, svält och korruption. Du har lovat folket att
      du ska förändra landet och göra det till ett bättre ställe
      för alla. Men militären, kyrka, parlamentet och storföretagen
      kan både stötta och motarbeta dig. Du måste fatta svåra beslut
      och balansera mellan olika intressen för att lyckas. Om du inte lyckas
      kan du bli avsatt, fängslad eller till och med dödad. Lycka till!
    </p>
    <button type="button" @click="startGame">
      Starta spelet
    </button>
  </div>
</template>

<script>
import { useGameStore } from '../stores/gameStore.js'

export default {
  methods: {
    startGame () {
      useGameStore().start()
    }
  }
}
</script>
