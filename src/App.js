import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    );
  }
}

export default App;
