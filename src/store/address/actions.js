import { patchBooking } from "../../api/booking"

export const FETCH_ADDRESS = "FETCH_ADDRESS"
export const FETCH_ADDRESS_FAILURE = "FETCH_ADDRESS_FAILURE"
export const FETCH_ADDRESS_SUCCESS = "FETCH_ADDRESS_SUCCESS"

const fetchAddressSuccess = response => {
  return {
    type: FETCH_ADDRESS_SUCCESS,
    payload: response,
  }
}

const fetchAddressFailure = error => {
  return {
    type: FETCH_ADDRESS_FAILURE,
    payload: error,
  }
}

export const getAddress = async (data, state, dispatch) => {
  dispatch({ type: "FETCH_ADDRESS" })

  try {
    const values = await patchBooking(state.booking.data.identifier, data)
    dispatch(fetchAddressSuccess(values))
  } catch (error) {
    dispatch(fetchAddressFailure(error))
  }
}
