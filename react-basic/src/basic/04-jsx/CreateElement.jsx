import React, { Component } from 'react'

export default class CreateElement extends Component {
  render() {
    return (
      React.createElement('h1', {
        className: 'title'
      }, 'hello world')
    )
  }
}
