import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class Child extends Component {
  constructor() {
    super()
    this.state = {
      name: 'jack'
    }
    console.log('constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log(props, state)
    console.log('getDerivedStateFromProps')
    return {
      name: 'chalice',
    }
  }
  render() {
    console.log('render')
    return (
      <div>
        <hr />
        {this.props.count} <br />
        child lifecyle <br />
        {this.state.name}
        <hr />
      </div>
    )
  }
  componentDidMount() {
    console.log('componentDidMount')
    // setTimeout(() => { // 卸载
    //   ReactDom.unmountComponentAtNode(document.getElementById('root'))
    // }, 5000);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', snapshot)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate')
    return 123
  }
}
