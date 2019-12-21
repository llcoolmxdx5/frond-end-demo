import React, { Component } from 'react'
import { get } from 'utils/http'
import Headbar from 'components/headbar/Headbar'
import Search from 'components/search/Search'
import Swiper from './components/Swiper'
import HotCate from './components/HotCate'
import Top10 from './components/Top10'

export default class Cookbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiperData: [1, 2, 3],
      hotcateData: []
    }
  }
  async getSwiper() {
    let res = await get('/api/swiper');
    if (res.data.code === 200) {
      this.setState({
        swiperData: res.data.data
      })
    }
  }
  async getHotcate() {
    let res = await get('/api/hotcate');
    this.setState({
      hotcateData: res.data.data
    })
  }
  render() {
    return (
      <div>
        <Headbar>菜谱大全</Headbar>
        <Swiper list={this.state.swiperData}></Swiper>
        <Search hasborder={true} bgcolor='#f8f3fa' placeholder={'想吃什么搜这里 如:川菜'} />
        <HotCate list={this.state.hotcateData}></HotCate>
        <Top10 list={this.state.hotcateData}></Top10>
      </div>
    )
  }
  componentDidMount() {
    this.getSwiper()
    this.getHotcate()
  }
}
