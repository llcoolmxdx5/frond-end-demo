import React from "react";

interface Iprops {
  children: React.ReactNode;
}

interface IState {
  auth: boolean;
  username: string;
}

// type AppContext = typeof defaultValue

const defaultValue = {
  auth: false,
  username: "",
  signin: () => {},
};

let { Provider, Consumer: AppConsumer } = React.createContext(defaultValue);

class AppProvider extends React.Component<Iprops, IState> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      auth: false,
      username: "",
    };
  }
  signin = () => {
    this.setState({
      auth: true,
      username: "admin123",
    });
  };
  render() {
    return (
      <Provider
        value={{
          auth: this.state.auth,
          username: this.state.username,
          signin: () => this.signin(),
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { AppProvider, AppConsumer };
