
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Box, FormControl, Input, Heading, FormLabel, SimpleGrid } from '@chakra-ui/core'

export const Client = () => {
  const [state, dispatch] = useContext(BookingContext);
  const handleFirstNameChange = (e) => {
    dispatch(updateBooking({ first_name: e.target.value }, state, dispatch))
  };

  const handleLastNameChange = (e) => {
    dispatch(updateBooking({ last_name: e.target.value }, state, dispatch))
  };

  const handleEmailChange = (e) => {
    dispatch(updateBooking({ email: e.target.value }, state, dispatch))
  };

  const handlePhoneChange = (e) => {
    dispatch(updateBooking({ phone: e.target.value }, state, dispatch))
  };

  return (
    <Box witdh="100%" border="1px solid teal" rounded="lg" className="card-big">
      <Heading as="h3" size="lg" mb="5">How big is your Home?</Heading>
      <SimpleGrid columns={2} spacing={10}>

        <FormControl >
          <FormLabel htmlFor="name">First name</FormLabel>
          <Input
            name="first_name"
            onChange={handleFirstNameChange}
            type="text" placeholder="Kersti"
          />
        </FormControl>
        <FormControl >
          <FormLabel htmlFor="name">Last name</FormLabel>
          <Input
            name="last_name"
            onChange={handleLastNameChange}
            type="text" placeholder="Kaljulaid"
          />
        </FormControl>
        <FormControl >
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            name="email"
            onChange={handleEmailChange}
            type="email" placeholder="Kersti@email.com"
          />
        </FormControl>
        <FormControl >
          <FormLabel htmlFor="tel">Phone Number</FormLabel>
          <Input
            name="phone"
            onChange={handlePhoneChange}
            type="tel" placeholder="+372 82194129"
          />
        </FormControl>
      </SimpleGrid>
    </Box>
  );
}