import React, { useContext } from "react"
import { BookingContext } from "../context/BookingContext"
import { updateBooking } from "../store/booking/actions"
import {
  Tooltip,
  Badge,
  Heading,
  Box,
  Button,
  Spinner,
  Grid,
} from "@chakra-ui/core"

export const DurationSelector = React.forwardRef(({ label }, ref) => {
  const [state, dispatch] = useContext(BookingContext)

  const handleClick = e => {
    dispatch(updateBooking({ duration: e }, state, dispatch))
  }

  if (state.services.isLoading)
    return (
      <Box rounded="lg" className="card-big">
        <Spinner color="teal.400" size="xl" />
      </Box>
    )

  if (!state.services.data) return null

  const recomendedTimes = state.services.data[0].service_options.filter(
    x => x.area + " m2" === state.booking.data.area
  )
  return (
    <Box witdh="100%" rounded="lg" className="card-big">
      <Box>
        <Heading as="h3" size="lg" mb="5">
          How many hours should we clean?
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap={10}>
          {recomendedTimes.map((obj, key) => {
            const selected = state.booking.data.duration === obj.duration
            const border = selected ? "solid" : "outline"
            return (
              <Button
                ref={ref}
                name={label}
                variantColor="teal"
                type="radio"
                value={state.booking.data.duration}
                variant={border}
                onClick={() => handleClick(obj.duration)}
                defaultChecked={state.booking.data.duration === obj.duration}
                key={key}
                w={100}
              >
                {`${obj.duration} h`}

                <Tooltip
                  hasArrow
                  label="Info about this level of service which can be added in the service object"
                  placement="top"
                >
                  <Badge
                    rounded="full"
                    px="2"
                    py=".5"
                    variantColor="teal"
                    className="tool-tip"
                  >
                    {obj.name}
                  </Badge>
                </Tooltip>
              </Button>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
})
