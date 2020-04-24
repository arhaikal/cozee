import React, { useContext } from "react"
import { BookingContext } from "../context/BookingContext"
import { updateClient } from "../store/client/actions"
import { Box, FormControl, Input, FormLabel, Grid } from "@chakra-ui/core"

export const Client = () => {
  const [state, dispatch] = useContext(BookingContext)
  const handleFirstNameChange = e => {
    dispatch(updateClient({ first_name: e.target.value }, state, dispatch))
  }

  const handleLastNameChange = e => {
    dispatch(updateClient({ last_name: e.target.value }, state, dispatch))
  }

  const handleEmailChange = e => {
    dispatch(updateClient({ email: e.target.value }, state, dispatch))
  }

  const handlePhoneChange = e => {
    dispatch(updateClient({ phone: e.target.value }, state, dispatch))
  }

  return (
    <Box witdh="100%" rounded="lg" className="card-big">
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        <FormControl>
          <FormLabel htmlFor="name">First name</FormLabel>
          <Input
            name="first_name"
            onBlur={handleFirstNameChange}
            type="text"
            placeholder="Kersti"
            focusBorderColor="teal.400"
            defaultValue={state.client.data.firstName}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="name">Last name</FormLabel>
          <Input
            name="last_name"
            onBlur={handleLastNameChange}
            type="text"
            placeholder="Kaljulaid"
            focusBorderColor="teal.400"
            defaultValue={state.client.data.lastName}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            name="email"
            onBlur={handleEmailChange}
            type="email"
            placeholder="Kersti@email.com"
            focusBorderColor="teal.400"
            defaultValue={state.client.data.email}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="tel">Phone Number</FormLabel>
          <Input
            name="phone"
            onBlur={handlePhoneChange}
            type="tel"
            placeholder="+372 82194129"
            focusBorderColor="teal.400"
            defaultValue={state.client.data.phone}
          />
        </FormControl>
      </Grid>
    </Box>
  )
}
