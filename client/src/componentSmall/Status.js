import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class Status extends React.Component {
  render() {
    return (
      <ButtonGroup>
      	Status: 
        <Button>Single</Button>
        <Button>Complicated</Button>
        <Button>Taken</Button>
      </ButtonGroup>
    );
  }
}