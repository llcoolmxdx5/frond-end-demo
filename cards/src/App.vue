<template>
  <div id="app">
    <topBar :turn="turn" :current-player-index="currentPlayerIndex" :players="players"></topBar>
    <transition name="hand">
      <hand :cards="testHand" v-if="!activeOverlay" @card-play="testPlayCard"></hand>
    </transition>
  </div>
</template>

<script>
import state from "../directives/state";
import "../directives/utils";
import cards from "../directives/cards";
import topBar from "./components/top-bar";
import hand from "./components/hand";
// let maxHealth = 10
// let maxFood = 10
// let handSize = 5
let cardUid = 0;
// let currentPlayingCard = null
export default {
  name: "game",
  data() {
    return state;
  },
  components: { topBar, hand }, // card
  computed: {
    testCard() {
      return cards.archers;
    }
  },
  methods: {
    handlePlay() {
      console.log("you played a card");
    },
    createTestHand() {
      let cards = [];
      // let ids = Object.keys(cards);
      for (let i = 0; i < 5; i++) {
        cards.push(this.testDarwCard());
      }
      return cards;
    },
    testDarwCard() {
      let ids = Object.keys(cards);
      let randomId = ids[Math.floor(Math.random() * ids.length)];
      return {
        uid: cardUid++,
        id: randomId,
        def: cards[randomId]
      };
    },
    testPlayCard(card) {
      let index = this.testHand.indexOf(card)
      this.testHand.splice(index, 1)
      console.log(1)
    }
  },
  created() {
    this.testHand = this.createTestHand();
  }
};
</script>
