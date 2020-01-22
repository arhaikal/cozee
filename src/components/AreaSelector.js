
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { AREA } from './data';
import { Box, Text, Select, Heading } from '@chakra-ui/core'

export const AreaSelector = () => {
  const [state, dispatch] = useContext(BookingContext);
  const updateArea = (e) => {
    dispatch(updateBooking({ area: e.target.value }, state, dispatch))
  };

  return (
    <Box witdh="100%" border="1px solid teal" rounded="lg" className="card-big">
      <Box>
        <Heading as="h3" size="lg" mb="5">How big is your Home?</Heading>
        <Select
          as="select"
          name="area"
          onChange={updateArea}
          value={state.booking.area}>
          {AREA.map((obj, key) => <option value={obj.size} disabled="" key={key}>{obj.size}</option>)}
          >
        </Select>
      </Box>
    </Box>
  );
}