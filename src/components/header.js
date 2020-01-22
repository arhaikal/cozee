import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Heading } from '@chakra-ui/core';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#4FD1C5',
      opacity: '0.9',
      height: '81px',
      padding: '10px',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      <Heading color="white">
        {siteTitle}
      </Heading>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
