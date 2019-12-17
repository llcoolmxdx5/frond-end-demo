import React, { Component } from 'react'

class Comp1 extends Component {
  render() {
    return <div>{this.props.title},comp1</div>
  }
}

class Comp2 extends Component {
  render() {
    return <div>{this.props.title},comp2</div>
  }
}

const comps = {
  comp1: Comp1,
  comp2: Comp2
}

export default class Sanmu extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }
  render() {
    const Component1 = this.state.isLoggedIn ? comps['comp1'] : comps['comp2']
    return (
      <div>
        <Component1 title="hello" />
      </div>
    )
  }
}
