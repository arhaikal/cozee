
import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const BookingSummary = () => {
  const [state, _] = useContext(BookingContext);

  return (
    <Card className={"card-big fixed-card"}>
      <Card.Body>
        <p>Appartment Size: <b>{state.booking.area} m2</b></p>
        <p>Cleaning Hours: <b>{state.booking.duration} h</b></p>
        <p>How often<b> {state.booking.frequency}</b></p>
        <p>Address:<b> {state.booking.address && state.booking.address.formatted_address}</b></p>
      </Card.Body>
    </Card>
  );
}