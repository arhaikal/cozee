
import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const BookingSummary = () => {
  const [state, _] = useContext(BookingContext);

  return (
    <Card className={"card-big fixed-card"}>
      <Card.Body>
        <p>Appartment Size: <b>{state.booking.area}</b></p>
        <p>Cleaning Hours: <b>{state.booking.duration} h</b></p>
        <p>How often<b> {state.booking.frequency}</b></p>
        <p>Address:<b> {state.booking.address && state.booking.address.formatted_address}</b></p>
        <p>Your Info:</p>
        <p><b>{state.booking.first_name} {state.booking.last_name} </b></p>
        <p><b>{state.booking.email} </b></p>
        <p><b>{state.booking.phone}</b></p>
      </Card.Body>
    </Card>
  );
}