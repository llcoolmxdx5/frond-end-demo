<template>
  <div class="top-bar" :class="'player-'+currentPlayerIndex">
    <div class="player p0">{{ players[0].name }}</div>
    <div class="turn-counter">
      <img src="../assets/svg/turn.svg" class="arrow" />
      <div class="turn">Turn {{ turn }}</div>
    </div>
    <div class="player p1">{{ players[1].name }}</div>
  </div>
</template>
<script>
export default {
  props: ["players", "currentPlayerIndex", "turn"]
};
</script>
