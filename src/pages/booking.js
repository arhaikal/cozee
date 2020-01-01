import React from 'react';
import Layout from '../components/layout';
import BookingForm from '../components/booking-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router'


const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h3>Happy to be home</h3>
        <h1>Cleaning made simple!</h1>
      </div>
      <BookingForm />
      <nav>
      </nav>
      <Router>
        <IndexPage path="/" />
      </Router>
    </Layout>
  );
};

export default IndexPage;
