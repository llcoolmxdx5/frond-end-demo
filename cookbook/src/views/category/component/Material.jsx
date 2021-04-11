import React, { Component } from 'react'
import CateList from 'components/catelist/CateList'

export default class Material extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: '肉类'
    }
  }
  handleClick = (item) => {
    this.setState({
      nav: item
    })
  }
  render() {
    return (
      <CateList list={this.props.list}
        nav={this.state.nav}
        changeNav={this.handleClick}
      ></CateList>
    )
  }
}
