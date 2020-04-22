import React, { useContext } from "react"
import { BookingStepContext } from "../context/BookingStepContext"
import { Button, Flex, Grid } from "@chakra-ui/core"
import Card from "./card"
import { setLocalStorage } from "../utils/persistState"
import { navigate } from "gatsby"

const BookingStep3 = () => {
  const [state, updateState] = useContext(BookingStepContext)

  const handlePrevClick = () => {
    updateState({ step: 2 })
    setLocalStorage("step", 2)
  }

  if (state.step !== 3) {
    return null
  }
  return (
    <Grid gridRowGap={6}>
      <Card onSuccessfulCheckout={() => navigate("/booking/")} />
      <Flex align="left" justify="space-between" mb={6}>
        <Button
          leftIcon="arrow-back"
          variantColor="teal"
          variant="solid"
          onClick={handlePrevClick}
        >
          Back
        </Button>
      </Flex>
    </Grid>
  )
}

export default BookingStep3
