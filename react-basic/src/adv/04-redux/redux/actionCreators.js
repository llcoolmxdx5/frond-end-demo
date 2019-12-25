import { ADD, DEL } from './actionTypes'

const add_item = data => {
  return {
    type: ADD,
    data
  }
}

const del_item = id => {
  return {
    type: DEL,
    id
  }
}

export { add_item, del_item }
