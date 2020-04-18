import React from "react"
import { BookingStepProvider } from "../context/BookingStepContext"
import BookingStep1 from "./booking-step-1"
import BookingStep2 from "./booking-step-2"
import BookingStep3 from "./booking-step-3"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const BookingForm = () => {
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh")

  return (
    <div>
      <BookingStepProvider>
        <BookingStep1 />
        <BookingStep2 />
        <Elements stripe={stripePromise}>
          <BookingStep3 />
        </Elements>
      </BookingStepProvider>
    </div>
  )
}

export default BookingForm
