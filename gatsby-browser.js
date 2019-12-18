import React from "react"
import { BookingProvider } from "./src/context/BookingContext"

export const wrapRootElement = ({ element }) => (
  <BookingProvider>{element}</BookingProvider>
)