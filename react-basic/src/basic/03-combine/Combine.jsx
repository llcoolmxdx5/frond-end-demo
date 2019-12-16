import React, { Component } from 'react'
import ComA from './ComA'
import ComB from './ComB'

export default class Combine extends Component {
  render() {
    return (
      <ComA title="hello">
        <ComB></ComB>
      </ComA>
    )
  }
}
