import {
  FETCH_SERVICES,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
} from "./actions"

export const servicesState = {
  data: null,
  isLoading: false,
  error: null,
}
export const services = (state = servicesState, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    case FETCH_SERVICES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}
