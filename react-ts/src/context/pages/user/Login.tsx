import React, { Component } from "react";
import { AppConsumer } from "../../context/AppContext";

export default class Login extends Component {
  render() {
    return (
      <AppConsumer>
        {({ signin }) => {
          return <button onClick={signin}>登陆</button>;
        }}
      </AppConsumer>
    );
  }
}
