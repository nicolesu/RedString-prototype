import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import EventList from './components/EventList';

import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store ={store}>
        <div className="App">
          <AppNavBar/>
          <EventList/>
          </div>
        </Provider>
    );
  }
}

export default App;
