import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import './assets/styles/app.css';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>

    );
  }
}

export default App;
