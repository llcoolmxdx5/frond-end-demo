import React, { Component } from 'react'
import Item from './Item'
import connect from './redux/connect'

class List extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.list.map((value, index) => {
              return <Item key={value.id} item={value}></Item>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(List)
