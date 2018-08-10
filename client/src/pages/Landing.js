import React, {Component} from 'react';
import { Container } from 'reactstrap';
import SignUp from '../components/SignUp';
import {Redirect} from 'react-router';
import { Route } from 'react-router-dom';
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

class Landing  extends Component {

  state = {

    toSignUp : false,
    toSignin : false,
    modal: false,
	username:'',
	pasword:''

  };

  handleSignUp = () =>{
        console.log("sign up")

    this.setState(()=>({
      toSignUp: true
    }))
  }

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
 if (this.state.toSignUp === true) {
      return <Redirect to='/signup' />

    }
if (this.state.toSignIn === true) {
      return <Redirect to='/signup' />
    }

  return (
  	<div>
    <h1 style ={{marginLeft: '2rem', color:'red' }}>Welcome to RedString Match</h1>
    <h2>Please log in or sign up to access the platform</h2>
       <Container>
           <Button color="primary" size="lg" active  onClick={this.handleSignUp}>Sign Up</Button>{' '}
           <div>
           	<Button
				color="primary"
				size="lg"
          		onClick={this.toggle}
			>Log In </Button>{''}
			<Modal  isOpen={this.state.modal} toggle={this.toggle}>
				<ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
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
       </Container>
  	</div>
  	)
  }
}

export default Landing;