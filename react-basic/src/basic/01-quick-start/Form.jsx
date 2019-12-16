import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}></input>
        <button onClick={this.handleClick.bind(this)}>add</button>
      </>
    )
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  handleClick() {
    this.props.handleAdd(this.state.value)
    this.setState({
      value: ''
    })
  }
}
