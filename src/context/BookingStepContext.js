import React, { useState, createContext } from 'react';

export const BookingStepContext = createContext();

export const BookingStepProvider = (props) => {
  const [state, dispatch] = useState({ step: 1 });

  return (
    <BookingStepContext.Provider value={[state, dispatch]}>
      {props.children}
    </BookingStepContext.Provider>
  );
};
