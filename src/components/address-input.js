
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const AddressInput = () => {
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [state, dispatch] = useContext(BookingContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateBooking(
        {
          "address_query": `${address}, ${zipcode}`,
          "zip_code": zipcode
        }
        , state, dispatch
      )
    )
  }

  return (
    <Card className={"card-big"}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={8}>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Kesklinn 1, Tallinn"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  onChange={(e) => setZipcode(e.target.value)}
                  type="text"
                  placeholder="24141"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button
            variant="primary"
            type="submit"
            disabled={!address || !zipcode}
          >
            Validate Address
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}