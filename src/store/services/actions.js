import { getAllServices, postServices } from "../../api/services"
import { getBookingId } from "../booking/selectors"

export const FETCH_SERVICES = "FETCH_SERVICES"
export const FETCH_SERVICES_SUCCESS = "FETCH_SERVICES_SUCCESS"
export const FETCH_SERVICES_FAILURE = "FETCH_SERVICES_FAILURE"
export const POST_SERVICES_SUCCESS = "POST_SERVICES_SUCCESS"
export const POST_SERVICES_FAILURE = "POST_SERVICES_FAILURE"

const fetchServicesSuccess = response => {
  return {
    type: FETCH_SERVICES_SUCCESS,
    payload: response,
  }
}

const fetchServicesFailure = error => {
  return {
    type: FETCH_SERVICES_FAILURE,
    payload: error,
  }
}

const postServicesSuccess = response => {
  return {
    type: POST_SERVICES_SUCCESS,
    payload: response,
  }
}

const postServicesFailure = error => {
  return {
    type: POST_SERVICES_FAILURE,
    payload: error,
  }
}

export const getServices = async (state, dispatch) => {
  dispatch({ type: "FETCH_SERVICES" })

  try {
    const values = await getAllServices()
    dispatch(fetchServicesSuccess(values))
  } catch (error) {
    dispatch(fetchServicesFailure(error))
  }
}

export const addServices = async (data, state, dispatch) => {
  if (getBookingId(state)) {
    try {
      const values = await postServices(getBookingId(state), data)
      dispatch(postServicesSuccess(values))
    } catch (error) {
      dispatch(postServicesFailure(error))
    }
  }
}
