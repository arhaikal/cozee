import { navigate } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Form, Modal, Button, Card } from 'react-bootstrap';
import { FrequencySelector } from './frequency-selector'
import { DurationSelector } from './duration-selector'
import { AreaSelector } from './area-selector'


const BookingForm = () => {
  const [state, dispatch] = useContext(BookingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <AreaSelector />
      <DurationSelector />
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
