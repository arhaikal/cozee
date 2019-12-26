import { UPDATE_BOOKINGS } from '../actions/types';

export const postsReducer = (state = bookingsInitialState, action) => {
  switch (action.type) {
    case UPDATE_BOOKINGS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
}

export const bookingsInitialState = {}

export default postsReducer