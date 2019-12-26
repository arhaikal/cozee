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
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-7" style={{ backgroundColor: 'white', padding: '40px 60px' }}>
            <div style={{ margin: '0px 0px 20px -15px' }}>
              <h4 style={{ marginBottom: '0px', color: '#767676' }}>Happy to be home</h4>
              <h1>Cleaning made simple!</h1>
            </div>
            <BookingForm />
            <nav>
              <Link to="/">Home</Link>
            </nav>
            <Router>
              <IndexPage path="/" />
            </Router>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
