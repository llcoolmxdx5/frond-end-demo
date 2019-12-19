import React, { Component } from 'react'
import { DartProvider } from './context/dart'
import Count from './Count'
import Button from './Button'

export default class Dart extends Component {
  render() {
    return (
      <div>
        <DartProvider>
          <Button type='decrement'></Button>
          <Count></Count>
          <Button type='increment'></Button>
        </DartProvider>
      </div>
    )
  }
}
