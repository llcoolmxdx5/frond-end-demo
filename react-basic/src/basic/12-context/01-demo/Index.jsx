import React, { Component } from 'react'
import MyContext from './context/MyContext'
import CommonContext from './context/CommonContext'
import Child from './Child'

export default class Index extends Component {
  constructor() {
    super()
    this.state = {
      name: 'jack',
      age: 18
    }
  }
  render() {
    return (
      <div>
        <CommonContext.Provider value={{ title: 'ccc' }}>
          <MyContext.Provider value={{ ...this.state }}>
            <Child></Child>
          </MyContext.Provider>
        </CommonContext.Provider>
      </div>
    )
  }
}
