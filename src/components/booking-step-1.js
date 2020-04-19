import React, { useContext } from "react"
import { BookingStepContext } from "../context/BookingStepContext"
import FrequencySelector from "./frequency-selector"
import { DurationSelector } from "./duration-selector"
import { AreaSelector } from "./area-selector"
import { Button, Flex, Grid, Box, Heading } from "@chakra-ui/core"
import { useForm } from "react-hook-form"
import { setLocalStorage } from "../utils/persistState"

const BookingStep1 = () => {
  const [state, updateState] = useContext(BookingStepContext)
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    updateState({ step: 2 })
    setLocalStorage("step", 2)
  }

  if (state.step !== 1) {
    return null
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid gridRowGap={6}>
        <Box rounded="lg" className="card-big">
          <Box>
            <Heading as="h3" size="lg" mb="5">
              How big is your Home?
            </Heading>
            <AreaSelector label="area" ref={register({ required: true })} />
            {errors.area && "Your input is required"}
          </Box>
        </Box>
        <Box
          witdh="100%"
          rounded="lg"
          className="card-big"
          border={errors.duration ? "3px solid tomato" : ""}
        >
          <Box>
            <Heading
              as="h3"
              size="lg"
              mb="5"
              color={errors.duration ? "tomato" : ""}
            >
              How many hours should we clean?
            </Heading>
            <DurationSelector
              label="duration"
              ref={register({ required: true })}
            />
            {errors.duration && "Your input is required"}
          </Box>
        </Box>

        <Box witdh="100%" rounded="lg" className="card-big">
          <Box>
            <Heading as="h3" size="lg" mb="5">
              How often do you want us to clean?
            </Heading>
            <FrequencySelector
              label="frequency"
              ref={register({ required: true })}
            />
            {errors.frequency && "Your input is required"}
          </Box>
        </Box>

        <Flex align="center" justify="flex-end" mb={6}>
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

export default BookingStep1
