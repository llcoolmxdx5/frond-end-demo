import React, { Component, createContext } from 'react'
import axios from 'axios'
let { Provider, Consumer } = createContext()

export default class PosProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: []
    }
  }
  del = (id,e) => {
    e.preventDefault();
    this.setState({
      result: this.state.result.filter(value => value.positionId !== id)
    })
  }
  add = () => {
    console.log(2)
  }
  render() {
    return (
      <Provider value={{
        result: this.state.result,
        del: this.del,
        add: this.add
      }}>
        {this.props.children}
      </Provider>
    )
  }
  componentDidMount() {
    axios.get('/list_1.json')
      .then(res => {
        console.log(res.data.content.data.page.result)
        this.state.result.push(...res.data.content.data.page.result)
        this.setState({})
      })
  }
}

export { PosProvider, Consumer }
