import React, { Component } from 'react'
import Index from 'views/index/Index'
import Category from 'views/category/Category'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/index' component={Index}></Route>
        <Route path='/category' component={Category}></Route>
        <Redirect from='/' to='/index'></Redirect>
      </Router>
    )
  }
}

