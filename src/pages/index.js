import React from "react"

import Layout from "../components/layout"
import LandingForm from "../components/landing_form"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Image style={{ postion: `absolute`, maxHeight: `50%`, left: `0`, top: `0`, width: `100%`, height: `100%` }}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-7" style={{ backgroundColor: `white`, padding: `40px 60px`}}>
            <div style={{ margin: `0px 0px 20px -15px`}}>
              <h4 style={{ marginBottom: `0px`, color: `#767676`}}>Happy to be home</h4>
              <h1>Cleaning made simple!</h1>
            </div>
            <LandingForm />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
