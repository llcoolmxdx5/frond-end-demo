import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import Headbar from 'components/headbar/Headbar'
import Search from 'components/search/Search'
import { get } from 'utils/http'

export default class Cookbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3],
      imgHeight: 176,
    }
  }
  render() {
    return (
      <div>
        <Headbar>菜谱大全</Headbar>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
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
        <Search hasborder={true} bgcolor='#f8f3fa' placeholder={'想吃什么搜这里 如:川菜'} />
      </div>
    )
  }
  async componentDidMount() {
    let res = await get('/api/swiper');
    if (res.data.code === 200) {
      this.setState({
        data: res.data.data
      })
    }
  }
}
