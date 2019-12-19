import React, { Component } from 'react'
import { Consumer } from './context/Pos'

export default class Item extends Component {
  render() {
    return (
      <Consumer>
        {
          ({ result, del, update }) => {
            return (
              result.map((pos, i) => {
                return <tr key={pos.positionId} className="text-center">
                  <td>{pos.positionName}</td>
                  <td>{pos.city}</td>
                  <td>{pos.salary}</td>
                  <td>{pos.companyName}</td>
                  <td><button type='button' onClick={(e) => del(pos.positionId, e)}>删除</button></td>
                  <td><button type='button' onClick={(e) => update(pos)}>编辑</button></td>
                </tr>
              })
            )
          }
        }
      </Consumer>
    )
  }
}
