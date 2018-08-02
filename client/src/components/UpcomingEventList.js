import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem,Collapse, Button, CardBody, Card } from 'reactstrap';
import { getEvents } from '../actions/eventAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class UpcomingEventList extends Component {
  
  componentDidMount() {
    this.props.getEvents();
  }

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
   const { items } = this.props.item;

    return (
      <Container>
      <ListGroup>
        {items.map(({ _id, name, description, location, time }) => (
          <ListGroupItem key={_id}>
         <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{name}</Button>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
              Description: {description} <br></br> Location: {location} <br></br> Time: {time}

              </CardBody>
            </Card>
          </Collapse>
          </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

UpcomingEventList.propTypes = {
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getEvents }
)(UpcomingEventList);