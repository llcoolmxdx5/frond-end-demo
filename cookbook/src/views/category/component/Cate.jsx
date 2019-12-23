import React, { Component } from 'react'
import { CateContainer } from './cate.style'

export default class Cate extends Component {
  state = {
    nav: '热门'
  }
  handleClick(item) {
    this.setState({
      nav: item
    })
  }
  render() {
    let contentList = this.props.list[this.state.nav] || []
    return (
      <CateContainer>
        <div>
          <ul>
            {
              Object.keys(this.props.list).map((item, index) => {
                return <li
                key={index}
                className={item === this.state.nav ? 'active' : '' }
                onClick={this.handleClick.bind(this, item)}
                >{item}</li>
              })
            }
          </ul>
        </div>
        <div>
        <ul>
            {
              contentList.map((item, index) => {
              return <li key={index}>{item}</li>
              })
            }
          </ul>
        </div>
      </CateContainer>
    )
  }
}
