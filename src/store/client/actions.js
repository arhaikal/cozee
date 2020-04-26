import { postClient, patchClient } from "../../api/client"
import { getBookingId } from "../booking/selectors"
import { getClientId } from "../client/selectors"

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

  const bookingId = getBookingId(state)
  const clientId = getClientId(state)

  try {
    if (clientId) {
      const values = await patchClient(clientId, data)
      dispatch(fetchClientSuccess(values))
    } else {
      const values = await postClient(bookingId, data)
      dispatch(fetchClientSuccess(values))
    }
  } catch (error) {
    dispatch(fetchClientFailure(error))
  }
}
