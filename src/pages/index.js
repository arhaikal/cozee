import React from 'react';
import Layout from '../components/layout';
import LandingForm from '../components/landing-form';
import SEO from '../components/seo';
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />

      <div className="col-lg-7" style={{ backgroundColor: 'white', padding: '20px 40px' }}>
        <div>
          <h4 style={{ marginBottom: '0px', color: '#767676' }}>Happy to be home</h4>
          <h1>Cleaning made simple!</h1>
        </div>
        <LandingForm />
      </div>
    </Layout>
  );
};

export default IndexPage;
