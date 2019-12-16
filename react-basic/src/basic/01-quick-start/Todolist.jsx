import React, { Component } from 'react'
import List from './List'
import Form from './Form'

export default class Todolist extends Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }
  render() {
    return (
      <>
        <Form handleAdd={this.handleAdd.bind(this)}></Form>
        <List list={this.state.list}></List>
      </>
    )
  }
  handleAdd(value) {
    this.state.list.push(value)
    this.setState({})
  }
}
