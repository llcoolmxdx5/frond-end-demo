import React, { Component } from 'react'
import { HeadbarContainer } from './headbar.style'

export default class Headbar extends Component {
  render() {
    return (
      <div>
        <HeadbarContainer>
          {this.props.children}
        </HeadbarContainer>
      </div>
    )
  }
}
