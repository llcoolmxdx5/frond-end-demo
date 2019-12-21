import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

const Hot = () => {
  return <h2>正在热映</h2>
}

const Coming = () => {
  return <h2>即将上映</h2>
}

export default class Movie extends Component {
  render() {
    return (
      <div>
        <h1>Movie</h1>
        {/* <Link to='/coming'>即将上映</Link>
        <Link to='/hot'>正在热映</Link>
        <Switch> 
          <Route path='/hot'>
            <Hot></Hot>
          </Route>
          <Route path='/coming'>
            <Coming></Coming>
          </Route>
          <Route path='/index'>
            <Hot></Hot>
          </Route>
        </Switch> */}
      </div>
    )
  }
}
