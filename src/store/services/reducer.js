import {
  FETCH_SERVICES,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
} from "./actions"
import { getLocalStorage, setLocalStorage } from "../../utils/persistState"

export const servicesState = {
  data: getLocalStorage("services") || null,
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
      setLocalStorage("services", action.payload)
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
