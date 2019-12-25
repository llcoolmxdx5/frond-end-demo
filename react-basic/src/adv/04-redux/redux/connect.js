import { connect } from 'react-redux'

import { add_item, del_item } from './actionCreators'

const mapState = state => {
  return {
    list: state.list
  }
}

const mapDispatch = dispatch => {
  return {
    addItem: data => {
      dispatch(add_item(data))
    },
    delItem: id => {
      dispatch(del_item(id))
    }
  }
}

export default connect(mapState, mapDispatch)
