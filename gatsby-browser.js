import React from "react"
import { BookingProvider } from "./src/context/BookingContext"
import { AvailableBookingTimesProvider } from "./src/context/AvailableBookingTimesContext"
import { ThemeProvider, CSSReset } from "@chakra-ui/core";


export const wrapRootElement = ({ element }) => (
  <AvailableBookingTimesProvider>
    <BookingProvider>
      <ThemeProvider>
        <CSSReset />
        {element}
      </ThemeProvider>
    </BookingProvider>
  </AvailableBookingTimesProvider>
)
