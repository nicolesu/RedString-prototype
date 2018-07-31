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
import { addEvent } from '../actions/eventAction';

class EventModal extends Component {
	state = {
		modal: false,
		name: ''
	};

	toggle =() => {
		this.setState({
			modal: !this.state.modal
		});
	};

	onChange=(event) => {
		this.setState({ [event.target.name]: event.target.value });

	};

	render(){
		return(
			<div>
			<Button
				color="dark"
         	 	style={{ marginBottom: '2rem' }}
          		onClick={this.toggle}
			>Add Event</Button>
			<Modal  isOpen={this.state.modal} toggle={this.toggle}>
				<ModalHeader toggle={this.toggle}>Add To Event List</ModalHeader>
		          <ModalBody>
		            <Form onSubmit={this.onSubmit}>
		              <FormGroup>
		                <Label for="event">New Event</Label>
		                <Input
		                  type="text"
		                  name="name"
		                  id="event"
		                  placeholder="Event Name"
		                  onChange={this.onChange}
		                />
		                <br></br>
		                 <Input
		                  type="text"
		                  name="description"
		                  id="e-description"
		                  placeholder="Event description"
		                  onChange={this.onChange}
		                />
		               <br></br>
		                 <Input
		                  type="text"
		                  name="location"
		                  id="e-location"
		                  placeholder="Event location"
		                  onChange={this.onChange}
		                />
		               <br></br>
		                 <Input
		                  type="text"
		                  name="time"
		                  id="e-time"
		                  placeholder="Event time"
		                  onChange={this.onChange}
		                />

		                <Button color="dark" style={{ marginTop: '2rem' }} block>
		                  Add Event
		                </Button>
		              </FormGroup>
		            </Form>
		          </ModalBody>
			</Modal>
			</div>
		);
	}

}

export default connect() (EventModal);