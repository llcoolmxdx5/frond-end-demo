import React, { Component } from 'react'

export default class Yu extends Component {
  constructor() {
    super()
    this.state = {
      isShow: true
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>显示/隐藏</button>
        {this.state.isShow && <h1>显示/隐藏的内容</h1>}
      </div>
    )
  }
  clickHandler = () => {
    this.setState({
      isShow:!this.state.isShow
    })
  }
}
