import React from 'react';
import Layout from '../components/layout';
import BookingForm from '../components/booking-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { BookingSummary } from '../components/booking-summary'
import { Heading, Text } from '@chakra-ui/core';


const IndexPage = () => {
  return (
    <Layout>
      <Row>
        <Col>
          <Heading as="h3" size="lg">Cleaning made simple!</Heading>
          <Text fontSize="xl">Happy to be home</Text>
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
