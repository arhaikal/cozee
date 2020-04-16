
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { getAddress } from '../store/booking/actions'
import {
  AlertIcon,
  Alert,
  AlertDescription,
  Button,
  Box,
  CloseButton,
  Input,
  Grid,
  FormControl,
  FormLabel
} from "@chakra-ui/core";


export const AddressInput = () => {
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [state, dispatch] = useContext(BookingContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      getAddress(
        {
          address_query: `${address}, ${zipcode}`,
          zip_code: zipcode
        }
        , state, dispatch
      )
    )
  }


  const AddressNotFound = () => {

    if (state.addressError) {
      return (
        <Alert status="error" mt={4}>
          <AlertIcon />
          <AlertDescription>We could not find your address, please make sure that you wrote it correctly</AlertDescription>
        </Alert>
      )
    }
    return null
  }

  return (
    <Box witdh="100%" rounded="lg" className="card-big">
      <form onSubmit={handleSubmit}>
        <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4}>
          <FormControl >
            <FormLabel htmlFor="name">Address</FormLabel>
            <Input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Kesklinn 1, Tallinn"
              focusBorderColor="teal.400"
            />
          </FormControl>
          <FormControl >
            <FormLabel htmlFor="name">Zip Code</FormLabel>
            <Input
              onChange={(e) => setZipcode(e.target.value)}
              type="text"
              placeholder="24141"
              focusBorderColor="teal.400"
            />
          </FormControl>

        </Grid>
        <Button
          type="submit"
          variantColor="teal" size="md"
          disabled={!address || !zipcode}
          width="150px"
          mt={4}
        >
          Validate Address
        </Button>
      </form>
      <AddressNotFound />
    </Box>
  );
}
