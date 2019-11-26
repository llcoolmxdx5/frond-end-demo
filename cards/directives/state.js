import utils from './utils.js'
const state = {
  worldRatio: utils.getWorldRatio(),
  turn: 1,
  players: [
    { name: 'Anne of Cleves' },
    { name: 'William the Bald' }
  ],
  currentPlayerIndex: Math.round(Math.random()),
}
export default state
