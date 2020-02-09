import React, { useState, useContext } from 'react';
import { BookingStepContext } from '../context/BookingStepContext';
import FrequencySelector from './frequency-selector'
import { DurationSelector } from './duration-selector'
import { AreaSelector } from './area-selector'
import { Button, Flex } from "@chakra-ui/core";


const BookingStep1 = () => {
  const [state, updateState] = useContext(BookingStepContext);

  const handleNextClick = () => {
    updateState({ step: 2 })
  }

  if (state.step !== 1) {
    return null
  }
  return (
    <div>
      <AreaSelector />
      <DurationSelector />
      <FrequencySelector />
      <Flex align="center" justify="flex-end" mt={6} mb={6}>
        <Button rightIcon="arrow-forward" variantColor="teal" variant="solid" onClick={handleNextClick}>Next</Button>
      </Flex>
    </div>
  );
};

export default BookingStep1;
