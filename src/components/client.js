
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Client = () => {
  const [state, dispatch] = useContext(BookingContext);
  const handleFirstNameChange = (e) => {
    dispatch(updateBooking({ first_name: e.target.value }, state, dispatch))
  };

  const handleLastNameChange = (e) => {
    dispatch(updateBooking({ last_name: e.target.value }, state, dispatch))
  };

  const handleEmailChange = (e) => {
    dispatch(updateBooking({ email: e.target.value }, state, dispatch))
  };

  const handlePhoneChange = (e) => {
    dispatch(updateBooking({ phone: e.target.value }, state, dispatch))
  };

  return (
    <Card className={"card-big"}>
      <Card.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="first_name" onChange={handleFirstNameChange} type="text" placeholder="Kersti" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="last_name" onChange={handleLastNameChange} type="text" placeholder="Kaljulaid" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" onChange={handleEmailChange} type="email" placeholder="Kersti@email.com" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control name="phone" onChange={handlePhoneChange} type="tel" placeholder="+372 82194129" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}