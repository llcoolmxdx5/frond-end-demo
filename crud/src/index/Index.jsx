import React, { Component } from 'react'
import List from './List'
import { PosProvider } from './context/Pos'
import Modal from './Modal'

export default class Index extends Component {
  render() {
    return (
      <PosProvider>
        <Modal></Modal>
        <div className='container'>
          <List />
        </div>
      </PosProvider>

    )
  }
}
