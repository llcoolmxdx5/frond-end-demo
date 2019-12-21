import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation
} from 'react-router-dom'

// const Movie = () => {
//   return <h1>movie</h1>
// }
import Movie from './Movie'
import Theater from './Theater'

export default class Index extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/'>电影</Link> |
          <Link to='/theater/35'>电影院</Link> |
          <hr />
          <Switch>
            <Route path='/' component={Movie}>
              {/* <Movie></Movie> */}
            </Route>
            <Route path='/theater/:id' component={Theater}>
            </Route>


          </Switch>
        </div>
      </Router>
    )
  }
}
