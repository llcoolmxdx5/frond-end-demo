import React, { Component } from "react";

type IProps = {};

type IState = {
  xing: string;
  ming: string;
  [key: string]: string; // 上面两个的子集
};

export default class MyInput extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      xing: "",
      ming: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <>
        <label htmlFor="">
          姓：
          <input
            type="text"
            name="xing"
            onChange={this.handleChange}
            value={this.state.xing}
          />
        </label>
        <label htmlFor="">
          名：
          <input
            type="text"
            name="ming"
            value={this.state.ming}
            onChange={this.handleChange}
          />
        </label>
        <p>
          {this.state.xing} {this.state.ming}
        </p>
      </>
    );
  }
}
