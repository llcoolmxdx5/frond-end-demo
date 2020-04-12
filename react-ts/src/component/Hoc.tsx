import React, { Component } from "react";

class Hoc extends Component {
  render() {
    return (
      <>
        <h1>react</h1>
        <p>react是</p>
      </>
    );
  }
}

const withCopyright = (WrappedComponent: React.ComponentType) => {
  return class extends Component {
    render() {
      return (
        <>
          <WrappedComponent></WrappedComponent>
          <div>&copy; 版权所有 2020</div>
        </>
      );
    }
  };
};

const copyrightApp = withCopyright(Hoc);

export default copyrightApp;
