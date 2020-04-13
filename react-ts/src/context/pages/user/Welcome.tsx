import React, { Component } from "react";
import { AppConsumer } from "../../context/AppContext";

export default class Welcome extends Component {
  render() {
    return (
      <AppConsumer>
        {({ username }) => {
          return `welcome back ${username}`;
        }}
      </AppConsumer>
    );
  }
}
