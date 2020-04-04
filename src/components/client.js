
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Box, FormControl, Input, FormLabel, Grid } from '@chakra-ui/core'

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
    <Box witdh="100%" rounded="lg" className="card-big">
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        <FormControl >
          <FormLabel htmlFor="name">First name</FormLabel>
          <Input
            name="first_name"
            onChange={handleFirstNameChange}
            type="text" placeholder="Kersti"
            focusBorderColor="teal.400"
            defaultValue={state.booking.first_name}
          />
        </FormControl>
        <FormControl >
          <FormLabel htmlFor="name">Last name</FormLabel>
          <Input
            name="last_name"
            onChange={handleLastNameChange}
            type="text" placeholder="Kaljulaid"
            focusBorderColor="teal.400"
            defaultValue={state.booking.last_name}
          />
        </FormControl>
        <FormControl >
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            name="email"
            onChange={handleEmailChange}
            type="email" placeholder="Kersti@email.com"
            focusBorderColor="teal.400"
            defaultValue={state.booking.email}
          />
        </FormControl>
        <FormControl >
          <FormLabel htmlFor="tel">Phone Number</FormLabel>
          <Input
            name="phone"
            onChange={handlePhoneChange}
            type="tel" placeholder="+372 82194129"
            focusBorderColor="teal.400"
            defaultValue={state.booking.phone}
          />
        </FormControl>
      </Grid>
    </Box>
  );
}