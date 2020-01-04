
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Person = () => {
  const [state, dispatch] = useContext(BookingContext);
  const handleUpdate = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
  }

  return (
    <Card className={"card-big"}>
      <Card.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="first_name" onBlur={handleUpdate} type="text" placeholder="Kersti" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="last_name" onBlur={handleUpdate} type="text" placeholder="Kaljulaid" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" onBlur={handleUpdate} type="email" placeholder="Kersti@email.com" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control name="phone_number" onBlur={handleUpdate} type="tel" placeholder="+372 82194129" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}