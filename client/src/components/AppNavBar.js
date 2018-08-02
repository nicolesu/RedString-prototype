import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Profile from '../pages/Profile';
// import Past from '../pages/Past';
// import Upcoming from '../pages/Upcoming';
// import Connection from '../pages/Connection';
// import Host from '../pages/Host';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">RedString</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to='/profile'>My Profile</Link>
                </NavItem>
                <NavItem>
                  <Link to='/past'>Past Events</Link>
                </NavItem>
                 <NavItem>
                  <Link to='/upcoming'>Upcoming Events</Link>
                </NavItem>
                  <NavItem>
                  <Link to='/host'>Host Events</Link>
                </NavItem>
                  <NavItem>
                  <Link to='/connection'>Connection</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>

      </div>
    );
  }
}

export default AppNavbar;