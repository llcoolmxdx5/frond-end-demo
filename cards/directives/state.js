import utils from './utils.js'

const state = {
  worldRatio: utils.getWorldRatio(),
  turn: 1,
  players: [
    { name: 'Anne of Cleves' },
    { name: 'William the Bald' }
  ],
  currentPlayerIndex: Math.round(Math.random()),
  testHand: [],
  activeOverlay: null,
}
export default state
