import React, { useState, createContext } from "react"
import { getLocalStorage } from "../utils/persistState"

export const BookingStepContext = createContext()

export const BookingStepProvider = props => {
  const [state, dispatch] = useState({ step: getLocalStorage("step") || 1 })

  return (
    <BookingStepContext.Provider value={[state, dispatch]}>
      {props.children}
    </BookingStepContext.Provider>
  )
}
