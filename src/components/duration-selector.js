
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { TIME } from './data';
import { Select, Heading, Box, RadioButtonGroup, SimpleGrid } from '@chakra-ui/core';
import { CustomRadio } from './custom-radio';

export const DurationSelector = () => {
  const [state, dispatch] = useContext(BookingContext);
  const updateDuration = (e) => {
    dispatch(updateBooking({ duration: e }, state, dispatch))
  };

  return (
    <Box witdh="100%" rounded="lg" className="card-big">
      <Box>
        <Heading as="h3" size="lg" mb="5">How many hours should we clean?</Heading>
        <RadioButtonGroup
          defaultValue={state.booking.duration}
          onChange={updateDuration}
          name="duration"
          isInline
          spacing='22px'
        >
          {TIME.map((obj, key) =>
            <CustomRadio
              w={100} mb={5}
              value={obj.hours}
              key={key}>{`${obj.hours}`}
            </CustomRadio>)}
        </RadioButtonGroup>
      </Box>
    </Box >
  );
}