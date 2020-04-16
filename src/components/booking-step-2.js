import React, { useContext } from 'react';
import { BookingStepContext } from '../context/BookingStepContext';
import { AddressInput } from './address-input'
import { Client } from './client'
import { Calendar } from './calendar'
import { Button, Grid, Flex } from "@chakra-ui/core";


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
    <Grid gridRowGap={6}>
      <AddressInput />
      <Calendar />
      <Client />

      <Flex align="center" justify="space-between" mb={6}>
        <Button leftIcon="arrow-back" variantColor="teal" variant="solid" onClick={handlePrevClick}>Back</Button>
        <Button rightIcon="arrow-forward" variantColor="teal" variant="solid" onClick={handleNextClick}>Next</Button>
      </Flex>
    </Grid>
  );
};

export default BookingStep2;
