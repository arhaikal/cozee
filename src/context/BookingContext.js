import React, { useState, createContext } from "react";

export const BookingContext = createContext();

export const BookingProvider = props => {
  const [booking, setBooking] = useState({
    booking: {
      appartmentSize: "", 
      postcode: "",
      frequency: "",
      address:""
    }
  });

  return(
    <BookingContext.Provider value={[booking, setBooking]}>
      { props.children }
    </BookingContext.Provider>
  );
}