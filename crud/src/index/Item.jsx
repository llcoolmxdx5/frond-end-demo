import React, { Component } from 'react'
import { Consumer } from './context/Pos'

export default class Item extends Component {
  render() {
    return (
      <Consumer>
        {
          ({ result, del }) => {
            return (
              result.map((pos, i) => {
                return <tr key={pos.positionId} className="text-center">
                  <td>{pos.positionName}</td>
                  <td>{pos.city}</td>
                  <td>{pos.salary}</td>
                  <td>{pos.companyName}</td>
                  <td><a href='' onClick={(e) => del(pos.positionId, e)}>删除</a></td>
                  <td><a href=''>编辑</a></td>
                </tr>
              })
            )
          }
        }
      </Consumer>
    )
  }
}
