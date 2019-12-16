import React, { Component } from 'react'
import './common.scss' // yarn add node-sass
import './style.css'
import styles from './style'
import styled from './common.module.css'

export default class Movie extends Component {
  constructor() {
    super()
    this.state = {
      styleObj: {
        fontSize: '13px'
      }
    }
  }
  render() {
    return (
      <div className="container">
        movie
        <h1 style={{ fontSize: '13px' }}>正在热映</h1>
        <h1 style={this.state.styleObj}>正在热映</h1>
        <h1 style={styles.font}>正在热映</h1>
        <h1 className={styled.error} >搜索</h1>
      </div>
    )
  }
}
