import React, { Component } from 'react'
import Top10Container from './top10.style'

export default class Top10 extends Component {
  render() {
    return (
      <Top10Container column={2}>
        <h2>精品好菜</h2>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.img} alt="" />
                  <div>
                    <h3>{item.title}</h3>
                    <span>12345浏览 1234收藏</span>
                  </div>
                </li>
              )
            })
          }
          <li>更多</li>
        </ul>
      </Top10Container>
    )
  }
}
