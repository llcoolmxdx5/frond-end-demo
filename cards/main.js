// View
new Vue({
  name: 'game',

  el: '#app',
  template: `<div id="app">
    <top-bar :turn="turn" :current-player-index="currentPlayerIndex" :players="players" />

    <transition name="hand">
      <hand v-if="!activeOverlay" :cards="testHand" @card-play="testPlayCard" />
    </transition>

    <overlay v-if="activeOverlay">
      <overlay-content-player-turn v-if="activeOverlay === 'player-turn'" :player="currentPlayer" />
      <overlay-content-last-play v-else-if="activeOverlay === 'last-play'" :opponent="currentOpponent" />
      <overlay-content-game-over v-else-if="activeOverlay === 'game-over'" :players="players" />
    </overlay>

    </div>
  `,
  data: state,
  methods: {
    createTestHand() {
      const cards = []
      const ids = Object.keys(cards)
      for (let i = 0; i < 5; i++) {
        cards.push(this.testDrawCard())
      }
      return cards
    },
    testDrawCard() {
      const ids = Object.keys(cards)
      const randomId = ids[Math.floor(Math.random() * ids.length)]
      return {
        uid: cardUid++,
        id: randomId,
        def: cards[randomId]
      }
    },
    testPlayCard(card) {
      const index = this.testHand.indexOf(card)
      this.testHand.splice(index, 1)
    }
  },
  created() {
    this.testHand = this.createTestHand()
  },
})

// Window resize handling
window.addEventListener('resize', () => {
  state.worldRatio = getWorldRatio()
})

