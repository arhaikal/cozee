
import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns';

export const BookingSummary = () => {
  const [state, _] = useContext(BookingContext);

  const dateParser = (rawDate) => {
    let a = rawDate.split(/[^0-9]/);
    let date = new Date(Date.UTC(a[0], a[1] - 1, a[2], a[3], a[4], a[5]));
    return date
  }

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
        <p>Time</p>
        <p><b>{state.booking.starts_at && format(dateParser(state.booking.starts_at), 'MMM dd yyyy HH:mm')} </b></p>
        <p><b>{state.booking.starts_at && format(dateParser(state.booking.ends_at), 'MMM dd yyyy HH:mm')} </b></p>
      </Card.Body>
    </Card>
  );
}