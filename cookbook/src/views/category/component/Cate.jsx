import React, { Component } from 'react'
import CateList from 'components/catelist/CateList'

export default class Cate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: '热门'
    }
  }

  handleClick= (item) => {
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
