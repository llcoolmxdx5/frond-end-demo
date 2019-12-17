import React, { Component, createRef } from 'react'

export default class Event extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.username = createRef()
  }
  render() {
    return (
      <div>
        <a href="https://www.baidu.com" onClick={this.go}>go</a> <hr />
        <input type="text" defaultValue="Bob" ref={this.username}></input> <hr />
        {this.state.count}
        {/* <button onClick={this.handleClick}>+</button> */} {/* 1 */}
        {/* <button onClick={this.handleClick('abc')}>+</button> */} {/* 2 */}
        {/* <button onClick={e => this.handleClick('abc', e)}>+</button> */} {/* 3 */}
        <button onClick={this.handleClick.bind(this, 'abc')}>+</button> {/* 4 */} {/* e作为最后一个参数传递 */}
      </div>
    )
  }

  go = e => {
    e.preventDefault();
  }

  componentDidMount() {
    console.log(this.username.current.value)
  }

  // 1
  // handleClick = (e) => {
  // console.log(e)
  // this.setState(preState => {
  //   return {
  //     count: preState.count + 1
  //   }
  // })
  // }

  // 2
  // handleClick = (name) => {
  // console.log(name)
  // return (e) => {
  //   console.log(e);
  //   this.setState(preState => {
  //     return {
  //       count: preState.count + 1
  //     }
  //   })
  // }
  // }

  // 3 4
  handleClick = (name, e) => {
    console.log(name)
    console.log(e)
    this.setState(preState => {
      return {
        count: preState.count + 1
      }
    })
  }
}
