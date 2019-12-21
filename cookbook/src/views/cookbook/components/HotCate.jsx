import React, { Component } from 'react'
import HotCateContainer from './hotcate.style'
import Grid from 'components/grid/Grid'

export default class HotCate extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <HotCateContainer>
        <h2>热门分类</h2>
        <Grid list={this.props.list}></Grid>
      </HotCateContainer>
    )
  }
}
