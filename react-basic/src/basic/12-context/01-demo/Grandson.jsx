import React, { Component } from 'react'
import MyContext from './context/MyContext'
import CommonContext from './context/CommonContext'

export default class Grandson extends Component {
  // static contextType = MyContext
  render() {
    // console.log(this.context)
    return (
      <div>
        <MyContext.Consumer>
          {
            (obj) => {
              console.log(obj)
              return (
                <CommonContext.Consumer>
                  {
                    (obj) => {
                      return obj.title
                    }
                  }
                </CommonContext.Consumer>
              )
            }
          }
        </MyContext.Consumer>
      </div>
    )
  }
}
