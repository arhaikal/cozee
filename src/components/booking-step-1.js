import React, { useContext, useEffect } from "react"
import { BookingStepContext } from "../context/BookingStepContext"
import { BookingContext } from "../context/BookingContext"
import { DurationSelector } from "./duration-selector"
import { AreaSelector } from "./area-selector"
import { Button, Flex, Grid, Box, Heading } from "@chakra-ui/core"
import { useForm } from "react-hook-form"
import { addService } from "../store/services/actions"
import { updateBooking } from "../store/booking/actions"
import Supplies from "./supplies"

const BookingStep1 = () => {
  const [state, updateState] = useContext(BookingStepContext)
  const [appState, dispatch] = useContext(BookingContext)
  const { register, handleSubmit, errors } = useForm()

  const onStepOneSubmit = () => {
    updateState({ step: 2 })
    window.scrollTo(0, 0)
  }

  const defaultDuration =
    appState.services.data &&
    appState.services.data[0].service_options.filter(
      option => option.area === appState.booking.data.area.split(" ")[0]
    )[1].id

  useEffect(() => {
    dispatch(
      addService(
        {
          service: {
            service_id: "home_cleaning",
            service_option_id: defaultDuration,
          },
        },
        appState,
        dispatch
      )
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState.booking.data.area])

  useEffect(() => {
    dispatch(
      updateBooking({ area: appState.booking.data.area }, appState, dispatch)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (state.step !== 1) {
    return null
  }
  return (
    <form onSubmit={handleSubmit(onStepOneSubmit)}>
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
              ref={register({
                required: true,
                validate: value => value !== "0",
                min: 1,
              })}
            />
            {errors.duration && "Your input is required"}
          </Box>
        </Box>

        <Box witdh="100%" rounded="lg" className="card-big">
          <Box>
            <Heading as="h3" size="lg" mb="5">
              Would you like us to bring our cleaning supplies
            </Heading>
            <Supplies />
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
