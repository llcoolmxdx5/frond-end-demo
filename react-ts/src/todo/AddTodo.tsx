import React, { Component } from 'react'
import connect from './connect'

let textRef:React.RefObject<HTMLInputElement> = React.createRef()

type P = {
  add: (text:string) => void
}

class AddTodo extends Component<P> {
  handleClick = () => {
    let txt = (textRef.current as HTMLInputElement).value
    this.props.add(txt)
  }
  render() {
    return (
      <div>
        <input type="text" ref={textRef} />
        <button onClick={this.handleClick}>添加</button>
      </div>
    )
  }
}

export default connect(AddTodo)
