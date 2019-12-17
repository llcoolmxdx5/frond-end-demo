import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <li>
        { this.props.value }
        <button onClick={this.props.onDel.bind(this, this.props.index)}>删除</button>
      </li>
    )
  }
}
