
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Address = () => {
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [state, dispatch] = useContext(BookingContext);
  const handleSubmit = (key) => {
    dispatch(updateBooking(
      { "": key }))
  }

  return (
    <Card className={"card-big"}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Kesklinn 1, Tallinn" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control onChange={(e) => setZipcode(e.target.value)} type="text" placeholder="24141" />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!address || !zipcode}>
            Validate Address
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}