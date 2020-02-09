import React, { useState, useContext } from 'react';
import { BookingStepContext } from '../context/BookingStepContext';
import { Button } from "@chakra-ui/core";


const BookingStep3 = () => {
  const [state, updateState] = useContext(BookingStepContext);

  const handlePrevClick = () => {
    updateState({ step: 2 })
  }

  if (state.step !== 3) {
    return null
  }
  return (
    <div>
      <h1>payment page</h1>
      <Button leftIcon="arrow-back" variantColor="teal" variant="solid" onClick={handlePrevClick}>Back</Button>
    </div>
  );
};

export default BookingStep3;
