import React, { Component, Fragment } from 'react'

export default class ComA extends Component {
  render() {
    return (
      <Fragment>
        <div>component A</div>
        <div>{ this.props.title }</div>
        { this.props.children }
      </Fragment>
    )
  }
}
