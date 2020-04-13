import React, { Component } from 'react'
import { ITodo } from '../store/types'

type P = ITodo & {

}

export default class TodoItem extends Component<P> {
  render() {
    return (
      <li>
        {this.props.text}
      </li>
    )
  }
}
