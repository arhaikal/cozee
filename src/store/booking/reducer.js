import {
  FETCH_UPDATED_BOOKING_SUCCESS,
  FETCH_UPDATED_BOOKING_FAILURE
} from './actions';

export const booking = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPDATED_BOOKING_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_UPDATED_BOOKING_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const initialState = {
    data: {
    "additional_details": "",
    "address_query": "",
    "area": "0-39 m2",
    "currency": "EUR",
    "duration": "0.0",
    "ends_at": null,
    "frequency": "once",
    "hourly_rates": {
      "weekly": "17.0",
      "biweekly": "18.0",
      "monthly": "19.0",
      "once": "20.0"
    },
    "starts_at": null,
    "total_cost": "0.0",
    "zip_code": "",
  }
}

export default booking
