import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux'; //get state from redux into react component ( when we export we need to wrap the component in parenthesis)
import { getEvents } from '../actions/eventAction';
import PropTypes from 'prop-types';


class EventList extends Component {

  // state = {
  //   items:[
  //     { id:uuid(), name:'VR Game'},
  //     { id:uuid(), name:'Escape Room'},
  //     { id:uuid(), name:'KTV'},
  //     { id:uuid(), name:'Happy Hour'}
  //   ]  
  // }

  ComponentDidMount(){
    this.props.getEvents();
  }

  render(){

    //this.props.item
   // const { items } = this.state;
   const {items} = this.props.item;
    return(
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick ={() => {
              const name = prompt('Enter Event Name');
              if(name) {
                this.setState(state => ({
                  items: [...state.items, {id: uuid(), name}]
                }));
              }
          }}
          >Add Event</Button>
          <ListGroup>
            <TransitionGroup className="event-list">
              {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(item => item.id !== id )
                      }))
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}

            </TransitionGroup>
          </ListGroup>
      </Container>
    );
  }
 
} 

EventList.propTypes = {
  getEvents: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired 
}

//take item state turn it into a component property so we can use 
const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, {getEvents}) (EventList);



