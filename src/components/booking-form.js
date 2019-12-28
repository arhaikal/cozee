import axios from 'axios';
import { navigate } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { FREQUENCIES, AREA, TIME } from './data';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { cozeeApi } from '../api/bookingApi'
import { Form, Modal, Button, Card } from 'react-bootstrap';
import { FrequencySelector } from './frequency-selector'


const BookingForm = () => {
  const [state, dispatch] = useContext(BookingContext);


  const postBooking = async (data) => {
    if (state.booking.identifier) {
      console.log(state.booking.identifier)
      const response = await cozeeApi.patch(`${state.booking.identifier}`, data);
      dispatch(updateBooking(response.data))
    } else {
      console.log("nop")
      const response = await cozeeApi.post('', data);
      dispatch(updateBooking(response.data))
    }
  };

  const updateArea = (e) => {
    console.log(e.target.value)
    postBooking({ "area": e.target.value })
  };

  const updateZipcode = (e) => {
  };

  const updateDuration = (e) => {
    console.log(e.target.value)
    postBooking({ "duration": e.target.value })
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
