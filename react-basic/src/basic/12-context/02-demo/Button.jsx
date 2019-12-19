import React, { Component } from 'react'
import { Consumer } from './context/dart'

export default class Button extends Component {
  render() {
    return (
      <Consumer>
        {
          ({increment, decrement}) => {
            const type = this.props.type
            const btnText = type === 'increment' ? '+' : '-'
            const btnClick = type === 'increment' ? increment : decrement
            return <button onClick={btnClick}>{btnText}</button>
          }
        }
      </Consumer>
    )
  }
}
