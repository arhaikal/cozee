import React, { useContext, useEffect } from "react"
import { BookingContext } from "../context/BookingContext"
import { Tooltip, Badge, Box, Button, Spinner, Grid } from "@chakra-ui/core"
import { addServices } from "../store/services/actions"
import { homeServiceDuration } from "../store/services/selectors"

export const DurationSelector = React.forwardRef(({ label }, ref) => {
  const [state, dispatch] = useContext(BookingContext)

  const handleClick = e => {
    dispatch(
      addServices(
        [{ service_id: "home_cleaning", service_option_id: e.id }],
        state,
        dispatch
      )
    )
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
    <Grid templateColumns="repeat(5, 1fr)" gap={10}>
      {recomendedTimes.map((obj, key) => {
        const selected = homeServiceDuration(state) === obj.duration
        const border = selected ? "solid" : "outline"
        return (
          <Button
            ref={ref}
            name={label}
            variantColor="teal"
            value={homeServiceDuration(state)}
            variant={border}
            onClick={() => handleClick(obj)}
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
  )
})
