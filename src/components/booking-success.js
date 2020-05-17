import React, { useContext, useEffect } from "react"
import { BookingStepContext } from "../context/BookingStepContext"
import { BookingContext } from "../context/BookingContext"
import { DurationSelector } from "./duration-selector"
import { AreaSelector } from "./area-selector"
import { Button, Flex, Grid, Box, Heading, Stack, Text } from "@chakra-ui/core"
import { useForm } from "react-hook-form"
import { addService } from "../store/services/actions"
import { updateBooking } from "../store/booking/actions"
import Supplies from "./supplies"
import { BsCheckCircle } from "react-icons/bs"

const BookingSuccess = () => {
  const [state, updateState] = useContext(BookingStepContext)
  const [appState, dispatch] = useContext(BookingContext)

  if (state.step !== 'success') {
    return null
  }

  return (
    <Box display='flex' justifyContent='center' rounded="lg" className="card-big">
      <Box display='flex' alignItems='center' flexDirection='column'>
        <Box as={BsCheckCircle} size="70px" color="teal.400" />
        <Heading as="h1" size="xl" mb="4">
          Huraa! Your payment is successful!
        </Heading>
        <Stack spacing={0.1} display='flex' alignItems='center' flexDirection='column'>
          <Text fontSize="md">Please check your email for all the booking details</Text>
          <Text fontSize="xs">Thank you for choosing cozee</Text>
        </Stack>
      </Box>
    </Box>
  )
}

export default BookingSuccess
