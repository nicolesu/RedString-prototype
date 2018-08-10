import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addUser, getUsers } from '../actions/userAction';
import PropTypes from 'prop-types';

class SignUp extends Component {

  // componentDidMount() {
  //   this.props.getUsers();
  // }
constructor(props) {
  super(props);

};

    state = {
    name: '',
    nickname:'',
    username:'',
    password:'',
    currentUser:''
  };


  onAddClick = id => {
    this.props.addUser(id);
  };

  onChange =(event) => {
    this.setState({ [event.target.name]: event.target.value });

  };

  onSubmit =(event) => {
    event.preventDefault();

    const newUser= {
      //id: uuid(),
      name: this.state.name,
      nickname: this.state.nickname,
      username: this.state.username,
      password: this.state.password

    }

    //add event 
    this.props.addUser(newUser);

    //set current user 
    this.setState({ currentUser: this.state.name});
   //this.state.name ={ this.props.currentUser };
    // this.props.currentUser ={ this.state.currentUser };

    console.log(this.props.currentUser);

    //take the user to homepage
    this.props.history.push("/profile");
  };

	render() {

	  const { users } = this.props.user;
	  return(
	  	<div>
        <form onSubmit={this.onSubmit}>
	  	  <InputGroup>
        	  <InputGroupAddon addonType="prepend">Legal Name</InputGroupAddon>
         		 <Input 
                type="text"
                name="name"
                id="name"
                placeholder="First name"
                value={this.props.currentUser}
                onChange={this.onChange}/>
        	</InputGroup>
        	<br />
        	<InputGroup>
        	  <InputGroupAddon addonType="prepend">:</InputGroupAddon>
         		 <Input 
                type="text"
                name="nickname"
                id="nickname"
                placeholder="nickname"
                onChange={this.onChange} />
        	</InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
             <Input 
                type="text"
                name="username"
                id="username"
                placeholder="username"
                onChange={this.onChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
             <Input 
                type="text"
                name="password"
                id="password"
                placeholder="password"
                onChange={this.onChange} />
          </InputGroup>
          <Button 
              color="dark" 
              style={{ marginTop: '2rem' }} 
              >
            Sign Up Now
          </Button>
          </form>
	  	</div>
	  );

	}
}

const mapStateToProps = state => ({
  user: state.user
});


export default connect(
  mapStateToProps,
  { getUsers, addUser }
)(SignUp);
