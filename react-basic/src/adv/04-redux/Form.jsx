import React, { Component } from 'react'
import connect from './redux/connect'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      txt: ''
    }
  }
  handleChange(e) {
    this.setState({
      txt: e.target.value
    })
  }
  handleAdd = () => {
    let txt = this.state.txt;
    let id = parseInt(Math.random() * 10000);
    this.props.addItem({ id, name: txt })
  }
  render() {
    return (
      <div>
        <input type="text" onInput={this.handleChange.bind(this)} /> <button onClick={this.handleAdd}>添加</button>
      </div>
    )
  }
  componentDidMount() {
    console.log('form', this.props)
  }
}

export default connect(Form)
