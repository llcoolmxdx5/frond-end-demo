import React, { Component } from 'react'
import User from './User01'

export default class Content extends Component {
  render() {
    return (
      <div>
        {/* <User user={{ name: 'xiaoming', age: 20 }}>
          welcome
        </User> */}
        <User>
          welcome
        </User>
      </div>
    )
  }
}
