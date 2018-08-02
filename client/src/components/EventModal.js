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
//import uuid from 'uuid';

class EventModal extends Component {
	state = {
		modal: false,
		name: '',
		description:'',
		location:'',
		time:''
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

		const newEvent= {
			//id: uuid(),
			name: this.state.name,
			description: this.state.description,
			location: this.state.location,
			time: this.state.time

		}

		//add event 
		this.props.addEvent(newEvent);

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
			>Add New Event</Button>
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

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, {addEvent}) (EventModal);