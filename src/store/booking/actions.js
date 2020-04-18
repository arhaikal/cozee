import { postBooking, patchBooking } from "../../api/booking"

export const FETCH_UPDATED_BOOKING_SUCCESS = "FETCH_UPDATED_BOOKING_SUCCESS"
export const FETCH_UPDATED_BOOKING_FAILURE = "FETCH_UPDATED_BOOKING_FAILURE"

const fetchUpdatedBookingSuccess = response => {
  return {
    type: FETCH_UPDATED_BOOKING_SUCCESS,
    payload: response,
  }
}

const fetchUpdatedBookingFailure = error => {
  return {
    type: FETCH_UPDATED_BOOKING_FAILURE,
    payload: error,
  }
}

export const updateBooking = async (data, state, dispatch) => {
  try {
    if (state.booking.data.identifier) {
      const values = await patchBooking(state.booking.data.identifier, data)
      dispatch(fetchUpdatedBookingSuccess(values))
    } else {
      const values = await postBooking(data)
      dispatch(fetchUpdatedBookingSuccess(values))
    }
  } catch (error) {
    dispatch(fetchUpdatedBookingFailure(error))
  }
}
