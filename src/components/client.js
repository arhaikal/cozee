import React, { useContext, useState } from "react"
import { BookingContext } from "../context/BookingContext"
import { updateClient } from "../store/client/actions"
import { Box, FormControl, Input, FormLabel, Grid } from "@chakra-ui/core"
import {
  getClientLastName,
  getClientFirstName,
  getClientPhone,
  getClientEmail,
} from "../store/client/selectors"

export const Client = React.forwardRef(({ label }, ref) => {
  const [state, dispatch] = useContext(BookingContext)

  const handleChange = e => {
    dispatch(updateClient({ [e.target.name]: e.target.value }, state, dispatch))
  }

  return (
    <Box witdh="100%" rounded="lg" className="card-big">
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        <FormControl>
          <FormLabel htmlFor="name">First name</FormLabel>
          <Input
            name="first_name"
            label="first_name"
            onBlur={handleChange}
            type="text"
            placeholder="Kersti"
            focusBorderColor="teal.400"
            defaultValue={getClientFirstName(state)}
            ref={ref}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="name">Last name</FormLabel>
          <Input
            name="last_name"
            name="last_name"
            onBlur={handleChange}
            type="text"
            placeholder="Kaljulaid"
            focusBorderColor="teal.400"
            defaultValue={getClientLastName(state)}
            ref={ref}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            name="email"
            name="email"
            onBlur={handleChange}
            type="email"
            placeholder="Kersti@email.com"
            focusBorderColor="teal.400"
            defaultValue={getClientEmail(state)}
            ref={ref}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="tel">Phone Number</FormLabel>
          <Input
            name="phone"
            name="phone"
            onBlur={handleChange}
            type="tel"
            placeholder="+372 82194129"
            focusBorderColor="teal.400"
            defaultValue={getClientPhone(state)}
            ref={ref}
          />
        </FormControl>
      </Grid>
    </Box>
  )
})
