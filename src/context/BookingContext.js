import React, { useReducer, createContext } from 'react';
import { initialState, bookingReducer } from '../reducers/booking'

export const BookingContext = createContext();

export const BookingProvider = (props) => {
  const [state, dispatch] = useReducer(
    bookingReducer,
    initialState
  );

  return (
    <BookingContext.Provider value={[state, dispatch]}>
      {props.children}
    </BookingContext.Provider>
  );
};
