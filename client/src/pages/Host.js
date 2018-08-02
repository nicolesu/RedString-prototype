import React from 'react';
import EventList from '../components/EventList';
import EventModal from '../components/EventModal';
import { Container } from 'reactstrap';

const Host = () => (
  <div>
    <h1 style ={{marginLeft: '2rem' }}>Host!</h1>
       <Container>
         <EventModal/>
         <EventList/>
       </Container>
  </div>
)

export default Host;