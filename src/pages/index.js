import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Form from "../components/form"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Image style={{ postion: `absolute`, maxHeight: `50%`, left: `0`, top: `0`, width: `100%`, height: `100%` }}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-7" >
            <div style={{ color: `white`}}>
              <h6>Happy to be home</h6>
              <h1>Cleaning made simple!</h1>
            </div>
            <Form />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
