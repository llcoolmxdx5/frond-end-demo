import React, { Component } from 'react'
import AddTodo from "./AddTodo"
import ViewList from "./ViewList"

export default class Index extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <ViewList />
      </div>
    )
  }
}
