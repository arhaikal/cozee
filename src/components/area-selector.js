
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Form, Card } from 'react-bootstrap';
import { AREA } from './data';

export const AreaSelector = () => {
  const [state, dispatch] = useContext(BookingContext);
  const updateArea = (e) => {
    dispatch(updateBooking({ area: e.target.value }, state, dispatch))
  };

  return (
    <Card className={"card-big"}>
      <Card.Body>
        <Card.Title>How big is your Home?</Card.Title>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control
            as="select"
            name="area"
            onChange={updateArea}
            value={state.booking.area}>
            {AREA.map((obj, key) => <option value={obj.size} disabled="" key={key}>{obj.size}</option>)}
          </Form.Control>
        </Form.Group>
      </Card.Body>
    </Card>
  );
}