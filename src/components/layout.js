import React from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/general.scss"
import "../styles/general.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div
      style={{
        margin: "0 auto",
        padding: "0px",
        paddingTop: 0,
      }}
    >
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
