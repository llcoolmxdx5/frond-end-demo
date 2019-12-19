import React, { Component } from 'react'
import Item from './Item'
import { Consumer } from './context/Pos'


export default class List extends Component {
  render() {
    return (
      <Consumer>
      {
        ({ add, get_page }) => {
          return (
            <>
              <button type="button" className="btn btn-primary" onClick={add}>添加</button>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-center">职位名称</th>
                    <th className="text-center">地点</th>
                    <th className="text-center">薪资</th>
                    <th className="text-center">公司</th>
                    <th className="text-center" colSpan='2'>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <Item />
                </tbody>
              </table>
              <nav>
                <ul className="pagination">
                  <li style={{ marginRight: '10px' }}>
                    <a href="#" onClick={(e) => {get_page(1, e)}}>
                      <span>&laquo;</span>
                    </a>
                  </li>
                  <li style={{ marginRight: '10px' }}><a href="#" onClick={(e) => {get_page(1, e)}}>1</a></li>
                  <li style={{ marginRight: '10px' }}><a href="#" onClick={(e) => {get_page(2, e)}}>2</a></li>
                  <li style={{ marginRight: '10px' }}><a href="#" onClick={(e) => {get_page(3, e)}}>3</a></li>
                  <li style={{ marginRight: '10px' }}>
                    <a href="#" onClick={(e) => {get_page(3, e)}}>
                      <span>&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </>
          )
        }
      }
    </Consumer>
    )

  }
  // render() {
  //   return (
  //     <PosProvider>
  // <button type="button" className="btn btn-primary" onClick={add}>添加</button>
  //   <table className="table table-bordered">
  //     <thead>
  //       <tr>
  //         <th className="text-center">职位名称</th>
  //         <th className="text-center">地点</th>
  //         <th className="text-center">薪资</th>
  //         <th className="text-center">公司</th>
  //         <th className="text-center" colSpan='2'>操作</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       <Item />
  //     </tbody>
  //   </table>
  //   <nav>
  //     <ul className="pagination">
  //       <li style={{ marginRight: '10px' }}>
  //         <a href="/1">
  //           <span>&laquo;</span>
  //         </a>
  //       </li>
  //       <li style={{ marginRight: '10px' }}><a href="/1">1</a></li>
  //       <li style={{ marginRight: '10px' }}><a href="/2">2</a></li>
  //       <li style={{ marginRight: '10px' }}><a href="/3">3</a></li>
  //       <li style={{ marginRight: '10px' }}>
  //         <a href="/3">
  //           <span>&raquo;</span>
  //         </a>
  //       </li>
  //     </ul>
  //   </nav>
  //     </PosProvider>
  //   )
  // }
}
