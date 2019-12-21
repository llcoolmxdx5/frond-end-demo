import React, { Component } from 'react'
import GridContainer from './grid.style'

export default class Grid extends Component {
  render() {
    return (
      <GridContainer column={3}>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
              <li key={index}>
                <img src={item.img} alt=""/>
                <span>{item.title}</span>
              </li>

              )
            })
          }
          <li>更多</li>
        </ul>
      </GridContainer>
    )
  }
}
