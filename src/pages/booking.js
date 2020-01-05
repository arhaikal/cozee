import React from 'react';
import Layout from '../components/layout';
import BookingForm from '../components/booking-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router'
import { Row, Col } from 'react-bootstrap';
import { BookingSummary } from '../components/booking-summary'


const IndexPage = () => {
  return (
    <Layout>
      <Row>
        <Col>
          <div>
            <h1>Cleaning made simple!</h1>
            <p>Happy to be home</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <BookingForm />
        </Col>
        <Col>
          <BookingSummary />
        </Col>
      </Row>
    </Layout>
  );
};

export default IndexPage;
