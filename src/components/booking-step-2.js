import React, { useState, useContext } from 'react';
import { BookingStepContext } from '../context/BookingStepContext';
import { AvailableBookingTimesProvider } from '../context/AvailableBookingTimesContext';
import { AddressInput } from './address-input'
import { Client } from './client'
import { Calendar } from './calendar'
import { Button, Flex, Box } from "@chakra-ui/core";


const BookingStep2 = () => {
  const [state, updateState] = useContext(BookingStepContext);

  const handleNextClick = () => {
    updateState({ step: 3 })
  }

  const handlePrevClick = () => {
    updateState({ step: 1 })
  }

  if (state.step !== 2) {
    return null
  }
  return (
    <Flex direction='column'>
      <Box mt={6}>
        <AddressInput />
      </Box>
      <Box mt={6}>
        <AvailableBookingTimesProvider>
          <Calendar />
        </AvailableBookingTimesProvider>
      </Box>
      <Box mt={6}>
        <Client />
      </Box>

      <Flex align="center" justify="space-between" mb={6} mt={6}>
        <Button leftIcon="arrow-back" variantColor="teal" variant="solid" onClick={handlePrevClick}>Back</Button>
        <Button rightIcon="arrow-forward" variantColor="teal" variant="solid" onClick={handleNextClick}>Next</Button>
      </Flex>
    </Flex>
  );
};

export default BookingStep2;
