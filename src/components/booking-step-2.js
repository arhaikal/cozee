import React, { useState, useContext } from 'react';
import { BookingStepContext } from '../context/BookingStepContext';
import { AvailableBookingTimesProvider } from '../context/AvailableBookingTimesContext';
import { AddressInput } from './address-input'
import { Client } from './client'
import { Calendar } from './calendar'
import { Button, Flex } from "@chakra-ui/core";


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
    <div>
      <AddressInput />
      <AvailableBookingTimesProvider>
        <Calendar />
      </AvailableBookingTimesProvider>
      <Client />
      <Flex align="center" justify="space-between" mt={6} mb={6}>
        <Button leftIcon="arrow-back" variantColor="teal" variant="solid" onClick={handlePrevClick}>Back</Button>
        <Button rightIcon="arrow-forward" variantColor="teal" variant="solid" onClick={handleNextClick}>Next</Button>
      </Flex>
    </div>
  );
};

export default BookingStep2;
