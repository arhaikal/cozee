import {
  FETCH_CLIENT,
  FETCH_CLIENT_SUCCESS,
  FETCH_CLIENT_FAILURE,
} from "./actions"
import { getLocalStorage, setLocalStorage } from "../../utils/persistState"

export const clientState = {
  data: getLocalStorage("client") || {},
  isLoading: false,
  error: null,
}

export const client = (state = clientState, action) => {
  switch (action.type) {
    case FETCH_CLIENT:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_CLIENT_SUCCESS:
      setLocalStorage("client", {
        firstName: action.payload.first_name,
        lastName: action.payload.last_name,
        phone: action.payload.phone,
        email: action.payload.email,
      })
      return {
        ...state,
        data: {
          firstName: action.payload.first_name,
          lastName: action.payload.last_name,
          phone: action.payload.phone,
          email: action.payload.email,
        },
        isLoading: false,
      }
    case FETCH_CLIENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}
