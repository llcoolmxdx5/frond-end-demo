import React from 'react';
import ReactDOM from 'react-dom';
// import App from './basic/01-quick-start/Todolist';
// import App from './basic/02-component/CreateClass'
// import App from './basic/03-combine/Combine'
// import App from './basic/04-jsx/Jsx'
// import App from './basic/05-style/Search'
// import App from './basic/06-props/Index2'
// import App from './basic/07-state/Movie'
// import App from './basic/08-event/Event'
// import App from './basic/09-condition-render/If'
// import App from './basic/10-form/Uncontroll'
// import App from './basic/11-lifecycle/LifeCycle'
// import App from './basic/12-context/02-demo/Dart'
// import App from './basic/13-HOC/Index'
// import App from './adv/01-router/Index'
// import App from './adv/02/Index'


import App from './adv/04-redux/TodiList'
import { Provider } from 'react-redux'
import store from './adv/04-redux/redux/store'
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>
  , document.getElementById("root")
)

// ReactDOM.render(<App />, document.getElementById('root'));


// ReactDOM.render(
//   <App></App>
//   , document.getElementById("root")
// )

