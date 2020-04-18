import { getAvailableTimes } from "../../api/available-times"

export const FETCH_BOOKING_TIMES = "FETCH_BOOKING_TIMES"
export const FETCH_BOOKING_TIMES_SUCCESS = "FETCH_BOOKING_TIMES_SUCCESS"
export const FETCH_BOOKING_TIMES_FAILURE = "FETCH_BOOKING_TIMES_FAILURE"

const fetchBookingTimesSuccess = response => {
  return {
    type: FETCH_BOOKING_TIMES_SUCCESS,
    payload: response,
  }
}

const fetchBookingTimesFailure = error => {
  return {
    type: FETCH_BOOKING_TIMES_FAILURE,
    payload: error,
  }
}

export const getBookingTimes = async (data, state, dispatch) => {
  dispatch({ type: "FETCH_BOOKING_TIMES" })

  try {
    const values = await getAvailableTimes(data)
    setTimeout(() => {
      dispatch(fetchBookingTimesSuccess(values))
    }, 500)
  } catch (error) {
    dispatch(fetchBookingTimesFailure(error))
  }
}
