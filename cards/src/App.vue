<template>
  <div id="app">
    <topBar :turn="turn" :current-player-index="currentPlayerIndex" :players="players"></topBar>
  </div>
</template>

<script>
import state from '../directives/state'
import '../directives/utils'
import topBar from './components/top-bar'
export default {
  name: "game",
  data() {
    return state
  },
  components: {topBar}
};
</script>
