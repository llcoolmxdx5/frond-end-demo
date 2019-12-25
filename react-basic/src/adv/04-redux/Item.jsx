import React, { Component } from 'react'
import connect from './redux/connect'

class Item extends Component {
  render() {
    let {id, name} = this.props.item
    return (
      <li>
        {name}
        <button onClick={() => this.props.delItem(id)}>删除</button>
      </li>
    )
  }
}

export default connect(Item)
