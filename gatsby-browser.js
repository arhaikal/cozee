import React from "react"
import { BookingProvider } from "./src/context/BookingContext"
import { ThemeProvider, CSSReset } from "@chakra-ui/core";


export const wrapRootElement = ({ element }) => (
  <BookingProvider>
    <ThemeProvider>
      <CSSReset />
      {element}
    </ThemeProvider>
  </BookingProvider>
)
