import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
//import { Container } from 'reactstrap';
import Main from './Main';

import {Provider} from 'react-redux';
import store from './store';

import {Redirect} from 'react-router';
import SignUp from './components/SignUp';
import { Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {


  render() {
      
    return (
      <Provider store ={store}>
        <div className="App">
        <AppNavBar/>
        <Main/>
        </div>
        </Provider>
    );
  }
}

export default App;
