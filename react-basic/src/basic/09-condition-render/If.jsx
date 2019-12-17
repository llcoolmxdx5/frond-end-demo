import React, { Component } from 'react'

class Comp1 extends Component {
  render() {
    return <div>{this.props.title},comp1</div>
  }
}

class Comp2 extends Component {
  render() {
    return <div>{this.props.name},comp2</div>
  }
}

export default class If extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }
  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <Comp1 title="hello" />
        </div>
      )
    } else {
      return (
        <div>
          <Comp2 name="xioaming" />
        </div>
      )
    }
  }
}
