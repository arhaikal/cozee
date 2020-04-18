import React, { useContext, useEffect } from "react"
import { BookingContext } from "../context/BookingContext"
import { updateBooking } from "../store/booking/actions"
import { getServices } from "../store/services/actions"
import { Box, Select, Spinner } from "@chakra-ui/core"

export const AreaSelector = React.forwardRef(({ label, register }, ref) => {
  const [state, dispatch] = useContext(BookingContext)
  const updateArea = e => {
    dispatch(updateBooking({ area: e.target.value }, state, dispatch))
  }

  useEffect(() => {
    dispatch(getServices(state, dispatch))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (state.services.isLoading)
    return (
      <Box rounded="lg" className="card-big">
        <Spinner color="teal.400" size="xl" />
      </Box>
    )

  if (!state.services.data) return null

  return (
    <Select
      as="select"
      name="area"
      name={label}
      ref={ref}
      onChange={updateArea}
      value={state.booking.data.area}
    >
      {state.services.data[0].service_options
        .filter(obj => obj.name === "normal")
        .map((obj, key) => (
          <option value={obj.size} disabled="" key={key}>
            {obj.area} m2
          </option>
        ))}
      >
    </Select>
  )
})
