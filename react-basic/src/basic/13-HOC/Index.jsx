import React, { Component } from 'react'

import hoc from './hoc'

class Index extends Component {
  render() {
    console.log(this)
    return (
      <div>
        hoc
      </div>
    )
  }
}

export default hoc(Index, 'a', 'b')
