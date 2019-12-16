import React, { Component } from 'react'

export default class User extends Component {
  static defaultProps = {
    user: {
      name: "xiaohua",
      age: 28
    }
  }
  render() {
    let user = this.props.user
    return (
      <div>
        {user.name}
        <br></br>
        {user.age}
        <hr />
        {this.props.children}
      </div>
    )
  }
}
