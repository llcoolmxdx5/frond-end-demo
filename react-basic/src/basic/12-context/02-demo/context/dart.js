import React, { createContext, PureComponent } from 'react'

let { Provider, Consumer } = createContext()

class DartProvider extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  increment = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  decrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  render() {
    return (
      <Provider value={{
        count: this.state.count,
        increment: this.increment,
        decrement: this.decrement
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export { DartProvider, Consumer }

