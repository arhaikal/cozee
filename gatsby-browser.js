import React from "react"
import { BookingProvider } from "./src/context/BookingContext"
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import cozeeTheme from "./src/styles/theme"


export const wrapRootElement = ({ element }) => (
  <BookingProvider>
    <ThemeProvider theme={cozeeTheme}>
      <CSSReset />
      {element}
    </ThemeProvider>
  </BookingProvider>
)
