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

class AddFriend extends Component {
	state = {
		modal: false,
		fUsername:''
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

		//add friend to friends list
		const newEvent= {


		}


		//close modal
		this.toggle();
	};

	render(){
		return(
			<div>
			<Button
				color="dark"
         	 	style={{ marginBottom: '2rem' }}
          		onClick={this.toggle}
			>Add Friends</Button>
			<Modal  isOpen={this.state.modal} toggle={this.toggle}>
				<ModalHeader toggle={this.toggle}>New Friends</ModalHeader>
		          <ModalBody>
		            <Form onSubmit={this.onSubmit}>
		              <FormGroup>
		                <Label for="event">Add a friend by entering their RS username</Label>
		                <Input
		                  type="text"
		                  name="fUsername"
		                  id="fUsername"
		                  placeholder="User ID"
		                  onChange={this.onChange}
		                />
		                <br></br>
		                <Button color="dark" style={{ marginTop: '2rem' }} block>
		                  Add Friend
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

export default connect(mapStateToProps, {}) (AddFriend);