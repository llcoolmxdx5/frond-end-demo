import React, { Component } from 'react'

class Comp1 extends Component {
  render() {
    return <div>{this.props.title}</div>
  }
}

class Comp2 extends Component {
  render() {
    return <div>{this.props.name}</div>
  }
}

const comps = {
  comp1: Comp1,
  comp2: Comp2
}

export default class Jsx extends Component {
  render() {
    const Component1 = comps['comp1']
    return (
      <Component1 title="hello" />
    )
  }
}
