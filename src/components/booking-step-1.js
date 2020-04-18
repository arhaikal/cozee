import React, { useContext } from "react"
import { BookingStepContext } from "../context/BookingStepContext"
import FrequencySelector from "./frequency-selector"
import { DurationSelector } from "./duration-selector"
import { AreaSelector } from "./area-selector"
import { Button, Flex, Grid, Box, Heading } from "@chakra-ui/core"

const BookingStep1 = () => {
  const [state, updateState] = useContext(BookingStepContext)

  const handleNextClick = () => {
    updateState({ step: 2 })
  }

  if (state.step !== 1) {
    return null
  }
  return (
    <Grid gridRowGap={6}>
      <Box rounded="lg" className="card-big">
        <Box>
          <Heading as="h3" size="lg" mb="5">
            How big is your Home?
          </Heading>
          <AreaSelector />
        </Box>
      </Box>

      <DurationSelector />
      <FrequencySelector />

      <Flex align="center" justify="flex-end" mb={6}>
        <Button
          rightIcon="arrow-forward"
          variantColor="teal"
          variant="solid"
          onClick={handleNextClick}
        >
          Next
        </Button>
      </Flex>
    </Grid>
  )
}

export default BookingStep1
