import React, { Component } from 'react';
import { Button } from 'reactstrap';
import AppNavBar from './components/AppNavBar';
//import EventList from './components/EventList';
//import EventModal from './components/EventModal';
//import { Container } from 'reactstrap';
import Main from './Main';

import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {

  state = {
    home : true
  };

  signIn() {
    console.log("sign in")
  }
  signUp() {
    console.log("sign up")
  }


  render() {
    return (
      <Provider store ={store}>
        <div className="App">
          <AppNavBar/>
          <Button color="primary" size="lg" active onClick={this.signIn()}>Sign Up</Button>{' '}
           <Button color="primary" size="lg" active onClick={this.signUp()}>Sign In</Button>{' '}
          <Main />
          </div>
        </Provider>
    );
  }
}

export default App;
