<template>
  <div class="hand">
    <div class="wrapper">
      <transition-group name="card" tag="div" class="cards">
        <card v-for="card of cards" :key="card.uid" :def="card.def" @play="handlePlay(card)"></card>
      </transition-group>
    </div>
  </div>
</template>
<script>
import card from "./card";
export default {
  components: { card },
  props: ["cards"],
  methods: {
    handlePlay(card) {
      console.log(2)
      this.$emit("card-play", card);
    }
  }
};
</script>
