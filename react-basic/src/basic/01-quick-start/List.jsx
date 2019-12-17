import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
  render() {
    return (
      <ul>
        {
          this.props.list.map((item, index)=> {
            return <Item key={index} value={item} onDel={this.props.onDel} index={index}></Item>
          })
        }
      </ul>
    )
  }
}
