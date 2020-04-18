import {
  FETCH_UPDATED_BOOKING_SUCCESS,
  FETCH_UPDATED_BOOKING_FAILURE,
} from "./actions"
import { getLocalStorage, setLocalStorage } from "../../utils/persistState"

export const bookingState = {
  data: getLocalStorage("booking") || {
    area: "0-39 m2",
    currency: "EUR",
    ends_at: null,
    frequency: "once",
    hourly_rates: {
      weekly: "17.0",
      biweekly: "18.0",
      monthly: "19.0",
      once: "20.0",
    },
    starts_at: null,
    total_cost: "0.0",
  },
}

export const booking = (state = bookingState, action) => {
  switch (action.type) {
    case FETCH_UPDATED_BOOKING_SUCCESS:
      setLocalStorage("booking", action.payload)
      return {
        ...state,
        data: action.payload,
      }
    case FETCH_UPDATED_BOOKING_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
