import { navigate } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { FREQUENCIES, AREA, TIME } from './data';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Form, Modal, Button, Card } from 'react-bootstrap';
import { FrequencySelector } from './frequency-selector'


const BookingForm = () => {
  const [state, dispatch] = useContext(BookingContext);

  const updateArea = (e) => {
    dispatch(updateBooking({ "area": e.target.value }, state, dispatch))
  };

  const updateZipcode = (e) => {
  };

  const updateDuration = (e) => {
    dispatch(updateBooking({ "duration": e.target.value }, state, dispatch))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <Card className={"card-big"}>
        <Card.Body>
          <Card.Title>How often do you want us to clean?</Card.Title>
          <FrequencySelector />
        </Card.Body>
      </Card>
      <Button variant="primary" size="xxl" type="submit" value="add">
        Submit
      </Button>
    </Form >
  );
};

export default BookingForm;
