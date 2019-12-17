import React, { Component } from 'react'
import List from './List'
import Form from './Form'

export default class Todolist extends Component {
  constructor() {
    super()
    this.state = {
      list: ['北京', '上海']
    }
  }
  render() {
    return (
      <>
        <Form handleAdd={this.handleAdd.bind(this)}></Form>
        <List list={this.state.list} onDel={this.onDel.bind(this)}></List>
      </>
    )
  }
  handleAdd(value) {
    this.state.list.push(value)
    this.setState({})
  }
  onDel = (index) => {
    this.state.list.splice(index, 1)
    this.setState({})
  }
}
