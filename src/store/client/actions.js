import { patchBooking } from "../../api/booking"

export const FETCH_CLIENT = "FETCH_CLIENT"
export const FETCH_CLIENT_SUCCESS = "FETCH_CLIENT_SUCCESS"
export const FETCH_CLIENT_FAILURE = "FETCH_CLIENT_FAILURE"

const fetchClientSuccess = response => {
  return {
    type: FETCH_CLIENT_SUCCESS,
    payload: response,
  }
}

const fetchClientFailure = error => {
  return {
    type: FETCH_CLIENT_SUCCESS,
    payload: error,
  }
}

export const updateClient = async (data, state, dispatch) => {
  dispatch({ type: "FETCH_CLIENT" })

  try {
    const values = await patchBooking(state.booking.data.identifier, data)
    dispatch(fetchClientSuccess(values))
  } catch (error) {
    dispatch(fetchClientFailure(error))
  }
}
