import React from 'react';
import Layout from '../components/layout';
import BookingForm from '../components/booking-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BookingSummary } from '../components/booking-summary'
import { Heading, Text, Box, Grid } from '@chakra-ui/core';

const breakpoints = ["30em", "48em", "62em", "80em"];
// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const IndexPage = () => {
  return (
    <Grid m="100px 200px" templateAreas={{ md: "'title .' 'form summary'", sm: "'summary summary' 'title .' 'form form'" }} gap={6} templateColumns='2fr 1fr' >
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} gridArea='title'>
        <Heading as="h3" size="lg">Cleaning made simple!</Heading>
        <Text fontSize="xl">Happy to be home</Text>
      </Box>
      <Box gridArea='form'>
        <BookingForm />
      </Box>
      <Box gridArea='summary'>
        <BookingSummary />
      </Box>
    </Grid >
  );
};

export default IndexPage;
