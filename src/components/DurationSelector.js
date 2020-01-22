
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { TIME } from './data';
import { Select, Heading, Box } from '@chakra-ui/core';

export const DurationSelector = () => {
  const [state, dispatch] = useContext(BookingContext);
  const updateDuration = (e) => {
    dispatch(updateBooking({ duration: e.target.value }, state, dispatch))
  };

  return (
    <Box witdh="100%" border="1px solid teal" rounded="lg" className="card-big">
      <Box>
        <Heading as="h3" size="lg" mb="5">How many hours should we clean?</Heading>
        <Select placeholder="Select option"
          as="select"
          name="duration"
          onChange={updateDuration}
          defaultValue={state.booking.duration} >
          {TIME.map((obj, key) => <option value={obj.hours} disabled="" key={key}>{`${obj.hours} hours`}</option>)}
          >
        </Select>
      </Box>
    </Box >
  );
}