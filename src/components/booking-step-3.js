import React, { useContext } from "react"
import { BookingStepContext } from "../context/BookingStepContext"
import { Button, Flex, Grid } from "@chakra-ui/core"
import Card from "./card"
import { setLocalStorage } from "../utils/persistState"
import { navigate } from "gatsby"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const BookingStep3 = () => {
  const [state, updateState] = useContext(BookingStepContext)

  const stripePromise = loadStripe("pk_test_drddursPiMScce7PiwD00iC400MFXlm9lZ")

  const handlePrevClick = () => {
    updateState({ step: 2 })
    window.scrollTo(0, 0)
    setLocalStorage("step", 2)
  }

  if (state.step !== 3) {
    return null
  }
  return (
    <Grid gridRowGap={6}>
      <Elements stripe={stripePromise}>
        <Card onSuccessfulCheckout={() => navigate("/booking/")} />
      </Elements>
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
