import React, { useContext } from 'react';
import Layout from '../components/layout';
import BookingForm from '../components/booking-form';
import Image from '../components/image';
import SEO from '../components/seo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from '@reach/router'


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
