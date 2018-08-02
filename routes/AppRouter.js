import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import App from '../App';
import Profile from './pages/Profile';
import Past from './pages/Past';
import Upcoming from './pages/Upcoming';
import Connection from './pages/Connection';
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path= "/" component ={App}/>
        <Route path="/profile" component={Profile} />
        <Route path="/past" component={Past} />
        <Route path="/upcoming" component={Upcoming} />
        <Route path="/connection" component={Connection} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;