
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Form, Card } from 'react-bootstrap';
import { TIME } from './data';

export const DurationSelector = () => {
  const [state, dispatch] = useContext(BookingContext);
  const updateDuration = (e) => {
    dispatch(updateBooking({ duration: e.target.value }, state, dispatch))
  };

  return (
    <Card className={"card-big"}>
      <Card.Body>
        <Card.Title>How many hours should we clean?</Card.Title>
        <Form.Group>
          <Form.Control
            as="select"
            name="duration"
            onChange={updateDuration}
            defaultValue={state.booking.duration} >
            {TIME.map((obj, key) => <option value={obj.hours} disabled="" key={key}>{`${obj.hours} hours`}</option>)}
          </Form.Control>
        </Form.Group>
      </Card.Body>
    </Card>
  );
}