import React, { Component } from 'react'
import './modal.css'
import { Consumer } from './context/Pos'

export default class Modal extends Component {
  render() {
    return (
      <div className='overlay visible'>
        <div className="containe">
          <button className='btn btn-danger' style={{ float: 'right' }}>x</button>
            <form>
              <div className='pos'>
                <label for="inputEmail3" className='label'>职位</label>
                <div>
                  <input type="text" id="inputEmail3" />
                </div>
              </div>
              <div className='pos'>
                <label for="inputEmail3" className='label'>城市</label>
                <div>
                  <input type="text" id="inputEmail3" />
                </div>
              </div>
              <div className='pos'>
                <label for="inputEmail3" className='label'>薪水</label>
                <div>
                  <input type="text" id="inputEmail3" />
                </div>
              </div>
              <div className='pos'>
                <label for="inputEmail3" className='label'>公司</label>
                <div>
                  <input type="text" id="inputEmail3" />
                </div>
              </div>
              <div className='pos'>
                <div className='baocun'>
                  <button type="submit" className="btn btn-success">保存</button>
                </div>
              </div>
            </form>
        </div>
      </div>
    )
  }
}
