import React, { useState, useContext } from 'react';
import { BookingStepContext } from '../context/BookingStepContext';
import { AvailableBookingTimesProvider } from '../context/AvailableBookingTimesContext';
import { AddressInput } from './address-input'
import { Client } from './client'
import { Calendar } from './calendar'
import { Button } from "@chakra-ui/core";


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
      <Button onClick={handlePrevClick}>Previous</Button>
      <Button onClick={handleNextClick}>Next</Button>
    </div>
  );
};

export default BookingStep2;
