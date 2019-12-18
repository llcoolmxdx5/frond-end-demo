import React, { Component } from 'react'
import MyContext from './context/MyContext'

export default class Grandson extends Component {
  static contextType = MyContext
  render() {
    console.log(this.context)
    return (
      <div>
        {this.context.name}
      </div>
    )
  }
}
