/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import "../styles/general.scss";
import Image from '../components/image';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          padding: '0px',
          paddingTop: 0,
        }}
      >
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-12" >
              <main>{children}</main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
