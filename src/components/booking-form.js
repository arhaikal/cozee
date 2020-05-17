import React from "react"
import { BookingStepProvider } from "../context/BookingStepContext"
import BookingStep1 from "./booking-step-1"
import BookingStep2 from "./booking-step-2"
import BookingStep3 from "./booking-step-3"
import BookingSuccess from "./booking-success"

const BookingForm = () => {
  return (
    <div>
      <BookingStepProvider>
        <BookingStep1 />
        <BookingStep2 />
        <BookingStep3 />
        <BookingSuccess />
      </BookingStepProvider>
    </div>
  )
}

export default BookingForm
