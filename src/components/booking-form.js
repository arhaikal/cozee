import axios from 'axios';
import { navigate } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { FREQUENCIES, AREA, TIME } from './data';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { cozeeApi } from '../api/bookingApi'
import { Form, Modal } from 'react-bootstrap';
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
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>How big is your Home?</Form.Label>
        <Form.Control
          as="select"
          name="area"
          onChange={updateArea}
          value={state.booking.area}>
          {AREA.map((obj, key) => <option value={obj.size} disabled="" key={key}>{obj.size}</option>)}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>How many hours should we clean?</Form.Label>
        <Form.Control
          as="select"
          name="duration"
          onChange={updateDuration}
          defaultValue={state.booking.duration} >
          {TIME.map((obj, key) => <option value={obj.hours} disabled="" key={key}>{`${obj.hours} hours`}</option>)}
        </Form.Control>
      </Form.Group>
      <FrequencySelector />
      <input type="submit" value="add" />
    </Form >
  );
};

export default BookingForm;
