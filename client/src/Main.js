import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Past from './pages/Past';
import Upcoming from './pages/Upcoming';
import Connection from './pages/Connection';
import Host from './pages/Host';



// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route path='/profile' component={Profile}/>
      <Route path='/past' component={Past}/>
      <Route path='/upcoming' component={Upcoming}/>
      <Route path='/connection' component={Connection}/>
      <Route path='/host' component={Host}/>
    </Switch>
  </main>
)

export default Main