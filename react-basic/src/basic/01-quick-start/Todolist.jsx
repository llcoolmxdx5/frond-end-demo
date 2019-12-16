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
        <List></List>
        <Form></Form>
      </>
    )
  }
}
