import React from 'react';
import Layout from '../components/layout';
import BookingForm from '../components/booking-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BookingSummary } from '../components/booking-summary'
import { Heading, Text, Box } from '@chakra-ui/core';


const IndexPage = () => {
  return (
    <Layout>
      <Box p={4} display={{ md: "flex" }} flexDirection='column'>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Heading as="h3" size="lg">Cleaning made simple!</Heading>
          <Text fontSize="xl">Happy to be home</Text>
        </Box>
        <Box p={4} display={{ md: "flex" }} justifyContent='space-between'  >
          <Box flexShrink="0" w='60%'>
            <BookingForm />
          </Box>
          <Box flexShrink="0" w='37%' overflow='scroll'>
            <BookingSummary />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default IndexPage;
