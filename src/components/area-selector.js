
import React, { useContext, useEffect } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking, getServices } from '../store/booking/actions'
import { Box, Select, Spinner } from '@chakra-ui/core'

export const AreaSelector = () => {
  const [state, dispatch] = useContext(BookingContext);
  const updateArea = (e) => {
    console.log(state)
    dispatch(updateBooking({ area: e.target.value }, state, dispatch))
  };

  useEffect(() => {
    dispatch(getServices(state, dispatch))
  }, [])

  if (state.booking.isFetchingServices) return (
    <Box rounded="lg" className="card-big">
      <Spinner color="teal.400" size='xl' />
    </Box>
  );

  if (!state.booking.services) return null;

  return (
    <Select
      as="select"
      name="area"
      onChange={updateArea}
      value={state.booking.area}>
      {state.booking.services[0].service_options.filter(obj => obj.name === "normal").map((obj, key) => <option value={obj.size} disabled="" key={key}>{obj.area} m2</option>)}
      >
    </Select>
  );
}
