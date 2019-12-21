import React, { Component } from 'react'
import Headbar from 'components/headbar/Headbar'
import { HeadTab } from './category.style'
import Search from 'components/search/Search'

export default class Category extends Component {
  state = {
    dir: 'left'
  }
  handleClick(dir) {
    this.setState({
      dir: dir
    })
  }
  render() {
    return (
      <div>
        <Headbar>
          <HeadTab dir={this.state.dir}>
            <ul>
              <li onClick={this.handleClick.bind(this, 'left')} className={this.state.dir==='left' ? 'active' : ''}>分类</li>
              <li onClick={this.handleClick.bind(this, 'right')} className={this.state.dir==='right' ? 'active' : ''}>食材</li>
            </ul>
          </HeadTab>
        </Headbar>
        <Search bgcolor='#F8F3FA' inputbgcolor='#EFEFEF' placeholder='想吃什么搜这里 如:川菜'></Search>
      </div>
    )
  }
}
