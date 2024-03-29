import {
  FETCH_CLIENT,
  FETCH_CLIENT_SUCCESS,
  FETCH_CLIENT_FAILURE,
} from "./actions"

export const clientState = {
  data: {},
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
      return {
        ...state,
        data: action.payload,
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
