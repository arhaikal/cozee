
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';
import { updateBooking } from '../../actions/index'
import { Box, Text, PseudoBox } from '@chakra-ui/core'
import styles from './FrequencySelector.module.scss';

const FrequencySelector = () => {
  const [state, dispatch] = useContext(BookingContext);
  const handleClick = (key) => {
    dispatch(updateBooking({ frequency: key }, state, dispatch))
  }
  const hourlyRates = state.booking.hourly_rates

  return (
    <Box witdh="100%" border="1px solid" rounded="lg" className={styles.cardBig}>
      <Box>
        <Text fontSize="2xl">How often do you want us to clean?</Text>
        {Object.keys(hourlyRates).map((key, index) => {
          const selected = state.booking.frequency === key
          const border = selected ? 'primary' : 'light-border'
          return (
            <PseudoBox
              mt="2"
              as="button"
              width="100%"
              alignItems="center"
              borderWidth="1px"
              rounded="lg"
              onClick={() => handleClick(key)}
              key={index}
              _hover={{ borderColor: "gray.200", bg: "gray.200" }}
            >
              <Text width="100%" textAlign={'center'}>{key}</Text>
            </PseudoBox>
          );
        })}
      </Box>
    </Box>
  );
}

export default FrequencySelector;