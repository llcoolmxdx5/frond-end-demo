import React, { Component } from 'react'
import { withRouter,useParams }  from 'react-router-dom'

class Theater extends Component {
  render() {
    return (
      <div>
        <h1>theater</h1>
      </div>
    )
  }
  componentDidMount() {
    // let {id} = useParams()
    let id = this.props.match.params.id
    console.log(id)
  }
}
export default withRouter(Theater)
