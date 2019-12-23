import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const Movie = () => {
  return <h1>movie</h1>
}

const IndexPage = () => {
  return <h1>首页</h1>
}

// const

export default class Index extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/index'>首页</Link>
          <Link to='/movie'>影院</Link>
          <Link to='/profile'>我的</Link>
        </div>
        <Switch>
          <Route path='/index'>
            <h1>首页</h1>
          </Route>
          <Route path='/movie'>
            <h1>影院</h1>
          </Route>

          <Redirect exact to='/index' from='/'>

          </Redirect>
          {/* <Route path='*'>
            <IndexPage></IndexPage>
          </Route> */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
    )
  }
}
