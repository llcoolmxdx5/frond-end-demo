import React, { Component } from "react";

interface IProps {
  name: string;
}

interface IState {
  color: "red" | "blue";
}

export default class Home extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  // readonly state: IState = {
  //   color: "red",
  // };
  changeColor = () => {
    let color = this.state.color;
    if (color === "red") {
      this.setState({
        color: "blue",
      });
    } else {
      this.setState({
        color: "red",
      });
    }
  };
  render() {
    return (
      <div>
        <span style={{ color: this.state.color }}>中国加油</span>
        <br />
        <button onClick={this.changeColor}>change color</button>
      </div>
    );
  }
}
