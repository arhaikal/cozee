import React, { useContext } from "react"
import { BookingStepContext } from "../context/BookingStepContext"
import { AddressInput } from "./address-input"
import { Client } from "./client"
import { Calendar } from "./calendar"
import { Button, Grid, Flex, Box, Heading } from "@chakra-ui/core"
import { setLocalStorage } from "../utils/persistState"
import { useForm } from "react-hook-form"

const BookingStep2 = () => {
  const [state, updateState] = useContext(BookingStepContext)
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = () => {
    updateState({ step: 3 })
    setLocalStorage("step", 3)
  }

  const handlePrevClick = () => {
    setLocalStorage("step", 1)
    updateState({ step: 1 })
  }

  if (state.step !== 2) {
    return null
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid gridRowGap={6}>
        <Box
          witdh="100%"
          rounded="lg"
          className="card-big"
          border={errors.address ? "3px solid tomato" : ""}
        >
          <Heading
            as="h3"
            size="lg"
            mb="5"
            color={errors.address ? "tomato" : ""}
          >
            What is your home address?
          </Heading>
          <AddressInput label="address" ref={register({ required: true })} />
          {errors.address && "Your input is required"}
        </Box>
        <Calendar />
        <Client />
        <Flex align="center" justify="space-between" mb={6}>
          <Button
            leftIcon="arrow-back"
            variantColor="teal"
            variant="solid"
            onClick={handlePrevClick}
          >
            Back
          </Button>
          <Button
            rightIcon="arrow-forward"
            variantColor="teal"
            variant="solid"
            type="submit"
          >
            Next
          </Button>
        </Flex>
      </Grid>
    </form>
  )
}

export default BookingStep2
