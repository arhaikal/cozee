import React, { useContext } from "react"
import { BookingContext } from "../../context/BookingContext"
import { updateBooking } from "../../store/booking/actions"
import { Box, Text, Button, Heading } from "@chakra-ui/core"

const FrequencySelector = React.forwardRef(({ label }, ref) => {
  const [state, dispatch] = useContext(BookingContext)
  const handleClick = key => {
    dispatch(updateBooking({ frequency: key }, state, dispatch))
  }
  const hourlyRates = {
    weekly: "17.0",
    biweekly: "18.0",
    monthly: "19.0",
    once: "20.0",
  }

  return (
    <Box witdh="100%" rounded="lg" className="card-big">
      <Box>
        <Heading as="h3" size="lg" mb="5">
          How often do you want us to clean?
        </Heading>
        {Object.keys(hourlyRates).map((key, index) => {
          const selected = state.booking.data.frequency === key
          const border = selected ? "solid" : "outline"
          return (
            <Button
              ref={ref}
              name={label}
              value={state.booking.data.frequency}
              mt="6"
              width="100%"
              size="lg"
              variantColor="teal"
              variant={border}
              key={index}
              onClick={() => handleClick(key)}
            >
              <Text width="100%" textAlign={"center"} fontSize="lg">
                {key}
              </Text>
            </Button>
          )
        })}
      </Box>
    </Box>
  )
})

export default FrequencySelector
