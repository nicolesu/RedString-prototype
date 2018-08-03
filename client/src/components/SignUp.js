import React, {component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { getEvents, deleteEvent } from '../actions/eventAction';
import PropTypes from 'prop-types';

class SignUp extends Component {

  componentDidMount() {
    this.props.getUsers();
  }

  onAddClick = id => {
    this.props.addEvent(id);
  };

	render() {

	  const { users } = this.props.user;
	  return(
	  	<div>
	  	  <InputGroup>
      	  <InputGroupAddon addonType="prepend">@</InputGroupAddon>
       		 <Input placeholder="username" />
      		</InputGroup>
      	<br />
      	  <InputGroup>
      	  <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
       		 <Input placeholder="password" />
      		</InputGroup>
	  	</div>
	  );

	}
}

const mapStateToProps = state => ({
  user: state.user
});


export default connect(
  mapStateToProps,
  { getEvents, deleteEvent }
)(EventList);
