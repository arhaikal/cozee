
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../store/booking/actions'
import { Tooltip, Badge, Select, Heading, Box, RadioButtonGroup, SimpleGrid, Spinner } from '@chakra-ui/core';
import { CustomRadio } from './custom-radio';

export const DurationSelector = () => {
  const [state, dispatch] = useContext(BookingContext);
  const updateDuration = (e) => {
    dispatch(updateBooking({ duration: e }, state, dispatch))
  };

  if (state.isFetchingServices) return (
    <Box rounded="lg" className="card-big">
      <Spinner color="teal.400" size='xl' />
    </Box>
  );

  if (!state.services) return null;

  const recomendedTimes = state.services[0].service_options.filter(x => (x.area + " m2") === state.booking.area)

  return (
    <Box witdh="100%" rounded="lg" className="card-big">
      <Box>
        <Heading as="h3" size="lg" mb="5">How many hours should we clean?</Heading>
        <RadioButtonGroup
          defaultValue={state.booking.duration}
          onChange={updateDuration}
          name="duration"
          isInline
          spacing='40px'
        >
          {recomendedTimes.map((obj, key) =>
            <CustomRadio
              w={100} mb={5}
              value={obj.duration}
              key={key}>
              {`${obj.duration} h`}

              <Tooltip hasArrow label="Info about this level of service which can be added in the service object" placement="top">
                <Badge rounded="full" px="2" py=".5" variantColor="teal" className="tool-tip">
                  {obj.name}
                </Badge>
              </Tooltip>
            </CustomRadio>)}
        </RadioButtonGroup>
      </Box>
    </Box >
  );
}
