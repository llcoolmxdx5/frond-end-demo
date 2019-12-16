import React, { Component } from 'react'
import Hotshowing from './Hotshowing'
import Comingsoon from './Comingsoon'

export default class Movie extends Component {
  constructor() {
    super();
    this.state = {
      title: '中国机长'
    }
  }
  render() {
    return (
      <div>
        <Hotshowing title={this.state.title}></Hotshowing>
        <Comingsoon></Comingsoon>
      </div>
    )
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: "大闹天宫"
      })
    }, 5000)
  }
}
