import React, { Component } from 'react'
import Hotshowing from './Hotshowing'
import Comingsoon from './Comingsoon'

export default class Movie extends Component {
  constructor() {
    super();
    this.state = {
      title: '中国机长',
      count: 1
    }
  }
  render() {
    return (
      <div>
        <Hotshowing title={this.state.title} count={this.state.count}></Hotshowing>
        <Comingsoon></Comingsoon>
      </div>
    )
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState((preState, props) => { // 异步的
        return {
          title: "大闹天宫",
          count: preState.count + 1
        }
      }, () => {
        console.log(this.state.count) // 获取执行后的数据
      })
    }, 5000)
  }
}
