import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';

class SignIn extends Component {

	state = {
		modal: false,
		username:'',
		pasword:''
	};

	toggle =() => {
		this.setState({
			modal: !this.state.modal
		});
	};

	onChange =(event) => {
		this.setState({ [event.target.name]: event.target.value });

	};

	onSubmit =(event) => {
		event.preventDefault();

		//check database
		const newEvent= {


		}
		    
		//set current user to log in user



		//redirect to home page
		this.props.history.push("/profile");

		//close modal
		//this.toggle();
	};

	render(){
		return(
			<div>
			<Button
				color="primary"
				size="lg"
         	 	style={{ marginBottom: '2rem' }}
          		onClick={this.toggle}
			>Sign In </Button>
			<Modal  isOpen={this.state.modal} toggle={this.toggle}>
				<ModalHeader toggle={this.toggle}>Log In</ModalHeader>
		          <ModalBody>
		            <Form onSubmit={this.onSubmit}>
		              <FormGroup>
		                <Label for="event">Log in to RS with your username and password</Label>
		                <Input
		                  type="text"
		                  name="username"
		                  id="username"
		                  placeholder="your username"
		                  onChange={this.onChange}
		                />
		                <br></br>
		                <Input
		                  type="text"
		                  name="password"
		                  id="password"
		                  placeholder="your password"
		                  onChange={this.onChange}
		                />
		                <Button color="dark" style={{ marginTop: '2rem' }} block>
		                  submit
		                </Button>
		              </FormGroup>
		            </Form>
		          </ModalBody>
			</Modal>
			</div>
		);
	}

}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, {}) (SignIn);