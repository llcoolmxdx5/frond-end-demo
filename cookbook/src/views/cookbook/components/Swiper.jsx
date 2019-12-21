import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'

export default class Swiper extends Component {
  constructor() {
    super()
    this.state = {
      imgHeight: 176
    }
  }
  render() {
    return (
      <Carousel
        autoplay={true}
        infinite
      >
        {this.props.list.map(val => (
          <a
            key={val}
            href="/"
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img
              src={val.url}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>
    )
  }
}


