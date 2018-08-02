import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class Orientation extends React.Component {
  render() {
    return (
      <ButtonGroup>
        <Button>Female</Button>
        <Button>Male</Button>
        <Button>Both</Button>
      </ButtonGroup>
    );
  }
}