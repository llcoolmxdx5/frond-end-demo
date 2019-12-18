import React, { Component, PureComponent } from 'react'
import Child from './Child'

export default class LifeCycle extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
    console.log('parent constructor')
  }
  handleClick = () => {
    this.setState((preState) => {
      return { count: preState.count + 1 }
    })
  }
  render() {
    console.log('parent render')
    return (
      <div>
        <Child count={this.state.count}></Child>
        <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }
  componentDidMount() {
    console.log('parent componentDidMount')
  }
  componentDidUpdate() {
    console.log('parent componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('parent componentWillUnmount')
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('parent shouldComponentUpdate')
  //   return true
  // }
}
