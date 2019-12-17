import React, { Component } from 'react'

export default class Uncontroll extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.input.current.value);
    console.log(`Selected file - ${this.fileInput.current.files[0].name}`);
    console.log('ref', this.refs.username.value)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" defaultValue="Bob" ref={this.input} />
          {/* <input type="checkbox"> 和 <input type="radio"> 支持 defaultChecked，
              <select> 和 <textarea> 支持 defaultValue。 */}
        </label>
        <label>
          <input type="text" defaultValue="Alan" ref='username'></input>
        </label>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
          {/* 在 React 中，<input type="file" /> 始终是一个非受控组件，因为它的值只能由用户设置，而不能通过代码控制。 */}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
