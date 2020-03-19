
import React, { useState, useContext, useEffect } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking, getServices } from '../actions/index'
import { Box, Text, Select, Heading, Spinner } from '@chakra-ui/core'

export const AreaSelector = () => {
  const [state, dispatch] = useContext(BookingContext);
  const updateArea = (e) => {
    dispatch(updateBooking({ area: e.target.value }, state, dispatch))
  };

  useEffect(() => {
    dispatch(getServices(state, dispatch))
  }, [])


  if (state.isFetchingServices) return (
    <Box rounded="lg" className="card-big">
      <Spinner color="teal.400" size='xl' />
    </Box>
  );

  if (!state.services) return null;

  return (
    <Box rounded="lg" className="card-big">
      <Box>
        <Heading as="h3" size="lg" mb="5">How big is your Home?</Heading>
        <Select
          as="select"
          name="area"
          onChange={updateArea}
          value={state.booking.area}>
          {state.services[0].service_options.filter(obj => obj.name === "normal").map((obj, key) => <option value={obj.size} disabled="" key={key}>{obj.area} m2</option>)}
          >
        </Select>
      </Box>
    </Box>
  );
}