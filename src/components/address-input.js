
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Button, Box, Input, Grid, FormControl, FormLabel } from "@chakra-ui/core";


export const AddressInput = () => {
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [state, dispatch] = useContext(BookingContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateBooking(
        {
          address_query: `${address}, ${zipcode}`,
          zip_code: zipcode
        }
        , state, dispatch
      )
    )
  }

  return (
    <Box witdh="100%" rounded="lg" className="card-big">
      <form onSubmit={handleSubmit}>
        <Grid templateColumns="2fr 1fr" gap={2} gridRowGap={6}>
          <FormControl >
            <FormLabel htmlFor="name">Address</FormLabel>
            <Input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Kesklinn 1, Tallinn"
            />
          </FormControl>
          <FormControl >
            <FormLabel htmlFor="name">Zip Code</FormLabel>
            <Input
              onChange={(e) => setZipcode(e.target.value)}
              type="text"
              placeholder="24141"
            />
          </FormControl>
          <Button
            type="submit"
            variantColor="teal" size="md"
            disabled={!address || !zipcode}
            width="150px"
          >
            Validate Address
          </Button>
        </Grid>
      </form>
    </Box>
  );
}