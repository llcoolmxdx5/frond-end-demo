import React, { Component } from 'react'
import { Consumer } from './context/dart'

export default class Count extends Component {
  render() {
    return (
      <Consumer>
        {
          ({count}) => {
            return <span>{count}</span>
          }
        }
      </Consumer>
    )
  }
}
