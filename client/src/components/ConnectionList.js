import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem,Collapse, Button, CardBody, Card } from 'reactstrap';
import { getUsers } from '../actions/userAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class ConnectionList extends Component {
  
  componentDidMount() {
    this.props.getUsers();
  }

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  addFriend(user) {
    console.log("added to thie person's friends list")
  }

  render() {
   const { users } = this.props.user;

    return (
      <Container>
      <ListGroup>
        {users.map(({ _id, name, nickname, username }) => (
          <ListGroupItem key={_id}>
         <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{name}</Button>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
              Nickname: {nickname} <br></br> Username: {username} <br></br> 
               <Button color="success" size="sm" active 
                    onClick={this.addFriend.bind(this)}
                >Add to friend</Button>{' '} <br></br>
               <Button color="info" size="sm" active>Follow</Button>{' '}
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

ConnectionList.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUsers }
)(ConnectionList);