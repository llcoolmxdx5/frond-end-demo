import { ADD, DEL } from "./actionTypes"

const defaultState = {
  list: [
    { id: 1, name: 'beijing' },
    { id: 2, name: 'shanghai' }
  ]
}

const reducer  = (state = defaultState, action) => {
  switch(action.type) {
    case ADD:
      return {
        list: [action.data].concat(state.list)
      }
    case DEL:
      return {
        list: state.list.filter(value => value.id !== action.id)
      }
    default:
      return state
  }
}

export default reducer
