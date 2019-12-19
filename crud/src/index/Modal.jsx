import React, { Component, createRef } from 'react'
import './modal.css'
import { Consumer } from './context/Pos'

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.positionName = createRef()
    this.city = createRef()
    this.salary = createRef()
    this.companyName = createRef()
  }
  handleSubmit = (save, e) => {
    e.preventDefault();
    let item = {
      positionName: this.positionName.current.value,
      city: this.city.current.value,
      salary: this.salary.current.value,
      companyName: this.companyName.current.value,
      positionId: new Date - 0
    }
    save(item)
  }

  render() {
    return (
      <Consumer>
        {
          ({ isShow, cancel, save, item, handleChange }) => {
            if (isShow) {
              console.log(item)
              if (!Object.keys(item).length) {
                item = {
                  positionName: '',
                  city: '',
                  salary: '',
                  companyName: '',
                }
              }
              return (
                <div className='overlay visible'>
                  <div className="containe">
                    <button className='btn btn-danger' onClick={cancel} style={{ float: 'right' }}>x</button>
                    <form onSubmit={ this.handleSubmit.bind(this, save) }>
                      <div className='pos'>
                        <label htmlFor="inputEmail" className='label'>职位</label>
                        <div>
                          <input type="text" defaultValue={item.positionName} ref={this.positionName} id="inputEmail" />
                        </div>
                      </div>
                      <div className='pos'>
                        <label htmlFor="inputEmail1" className='label'>城市</label>
                        <div>
                          <input type="text" defaultValue={item.city} ref={this.city} id="inputEmail1" />
                        </div>
                      </div>
                      <div className='pos'>
                        <label htmlFor="inputEmail2" className='label'>薪水</label>
                        <div>
                          <input type="text" defaultValue={item.salary} ref={this.salary} id="inputEmail2" />
                        </div>
                      </div>
                      <div className='pos'>
                        <label htmlFor="inputEmail3" className='label'>公司</label>
                        <div>
                          <input type="text" defaultValue={item.companyName} ref={this.companyName} id="inputEmail3" />
                        </div>
                      </div>
                      <div className='pos'>
                        <div className='baocun'>
                          <button type="submit"  className="btn btn-success">保存</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )
            }
          }
        }
      </Consumer>
    )
  }
}
