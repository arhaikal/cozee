
import React, { useState, useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';
import { updateBooking } from '../../actions/index'
import { Box, Text, Button, Heading } from '@chakra-ui/core'
import styles from './frequency-selector.module.scss';

const FrequencySelector = () => {
  const [state, dispatch] = useContext(BookingContext);
  const handleClick = (key) => {
    dispatch(updateBooking({ frequency: key }, state, dispatch))
  }
  const hourlyRates = {
    "weekly": "17.0",
    "biweekly": "18.0",
    "monthly": "19.0",
    "once": "20.0"
  }

  return (
    <Box witdh="100%" rounded="lg" className="card-big">
      <Box>
        <Heading as="h3" size="lg" mb="5">How often do you want us to clean?</Heading>
        {Object.keys(hourlyRates).map((key, index) => {
          const selected = state.booking.frequency === key
          const border = selected ? 'solid' : 'outline'
          return (
            <Button
              mt="6"
              width="100%"
              size="lg"
              variantColor="teal" variant={border}
              key={index}
              onClick={() => handleClick(key)}
            >
              <Text width="100%" textAlign={'center'} fontSize="lg">{key}</Text>
            </Button>
          );
        })}
      </Box>
    </Box >
  );
}

export default FrequencySelector;