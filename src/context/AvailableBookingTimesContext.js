import React, { useReducer, createContext } from 'react';
import { initialState, availableTimesReducer } from '../store/available-booking-times/reducer'

export const AvailableBookingTimesContext = createContext();

export const AvailableBookingTimesProvider = (props) => {
  const [state, dispatch] = useReducer(
    availableTimesReducer, initialState
  );

  return (
    <AvailableBookingTimesContext.Provider value={[state, dispatch]}>
      {props.children}
    </AvailableBookingTimesContext.Provider>
  );
};
