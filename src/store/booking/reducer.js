import {
  FETCH_UPDATED_BOOKING_SUCCESS,
  FETCH_UPDATED_BOOKING_FAILURE,
} from "./actions"
import { getLocalStorage, setLocalStorage } from "../../utils/persistState"

export const bookingState = {
  data: getLocalStorage("booking") || {
    area: "0-39 m2",
    currency: "EUR",
    frequency: "once",
    starts_at: null,
    ends_at: null,
    total_cost: "0.0",
  },
}

export const booking = (state = bookingState, action) => {
  switch (action.type) {
    case FETCH_UPDATED_BOOKING_SUCCESS:
      setLocalStorage("booking", action.payload)
      return {
        ...state,
        data: {
          identifier: action.payload.identifier,
          area: action.payload.area,
          frequency: action.payload.frequency,
          starts_at: action.payload.starts_at,
          ends_at: action.payload.ends_at,
          total_cost: action.payload.total_cost,
        },
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
