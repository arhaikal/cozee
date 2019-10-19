import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Form from "../components/form"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Image style={{ postion: `absolute`, maxHeight: `50%`, left: `0`, top: `0`, width: `100%`, height: `100%` }}/>
      <Form style={{ postion: `absolute`,  left: `0.5`, top: `1`, index: `2`}}/>
  </Layout>
)

export default IndexPage
