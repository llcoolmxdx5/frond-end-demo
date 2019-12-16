import React, { Component } from 'react'
import Product from './Product02'

export default class Index2 extends Component {
  constructor() {
    super()
    this.state = {
      city: ['beijing', 'shanghai']
    }
  }
  render() {
    return (
      <div>
        <Product name={10} city={this.state.city}></Product>
      </div>
    )
  }
}
