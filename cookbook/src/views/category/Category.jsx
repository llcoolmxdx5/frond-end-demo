import React, { Component } from 'react'
import Headbar from 'components/headbar/Headbar'
import { CategoryContainer, HeadTab } from './category.style'
import Search from 'components/search/Search'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import Cate from './component/Cate'
import Material from './component/Material'
import { get } from 'utils/http'

class Category extends Component {
  state = {
    dir: 'left',
    category: {},
    material: {}
  }
  handleClick(dir) {
    let path = this.props.match.path
    this.setState({
      dir: dir
    }, () => {
      if (this.state.dir === 'left') {
        this.props.history.push(`${path}/category`)
      } else {
        this.props.history.push(`${path}/material`)
      }
    })
  }
  render() {
    return (
      <CategoryContainer>
        <Headbar>
          <HeadTab dir={this.state.dir}>
            <ul>
              <li onClick={this.handleClick.bind(this, 'left')} className={this.state.dir === 'left' ? 'active' : ''}>分类</li>
              <li onClick={this.handleClick.bind(this, 'right')} className={this.state.dir === 'right' ? 'active' : ''}>食材</li>
            </ul>
          </HeadTab>
        </Headbar>
        <Search bgcolor='#F8F3FA' inputbgcolor='#EFEFEF' placeholder='想吃什么搜这里 如:川菜'></Search>
        <Switch>
          <Route path='/index/category' render={() => <Cate list={this.state.category}></Cate>}></Route>
          <Route path='/index/material' render={() => <Material list={this.state.material}></Material>}></Route>
          <Redirect to='/index/category' from='/'></Redirect>
        </Switch>
      </CategoryContainer>
    )
  }
  componentDidMount() {
    get('/api/category').then(res => {
      this.setState({
        category: res.data.data.category,
        material: res.data.data.material
      })
    })
  }
}

export default withRouter(Category)
