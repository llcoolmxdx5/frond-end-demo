import React, { Component } from "react";
import Login from "./Login";
import Welcome from "./Welcome";
import { AppConsumer } from "../../context/AppContext";

export default class Index extends Component {
  render() {
    return (
      <AppConsumer>
        {({ auth }) => {
          return auth ? <Welcome /> : <Login />;
        }}
      </AppConsumer>
    );
  }
}
