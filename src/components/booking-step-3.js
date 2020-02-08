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
      <h1>Hello</h1>
      <Button onClick={handlePrevClick}>Previous</Button>
    </div>
  );
};

export default BookingStep3;
