import React from 'react';
import Layout from '../components/layout';
import LandingForm from '../components/landing-form';
import Image from '../components/image';
import SEO from '../components/seo';
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <Image style={{
        postion: 'absolute', maxHeight: '50%', left: '0', top: '0', width: '100%', height: '100%',
      }}
      />
      <div >
        <h4>Happy to be home</h4>
        <h1>Cleaning made simple!</h1>
      </div>
      <LandingForm />
    </Layout>
  );
};

export default IndexPage;
