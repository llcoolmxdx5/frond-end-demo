import React, { Component } from 'react'
import TodoItem from "./TodoItem"
import { ITodo } from '../store/types'
import connect from './connect'

type IProps = {
  todos: Array<ITodo>
}

class ViewList extends Component<IProps> {
  render() {
    return (
      <ul>
        {
          this.props.todos.map(item => {
            return <TodoItem key={item.id} {...item} />
          })
        }
      </ul>
    )
  }
}

export default connect(ViewList)
