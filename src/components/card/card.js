import React, { useState, useContext, useEffect } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { postPaymentIntent } from "../../api/payment-intent"
import {
  Button,
  Box,
  Heading,
  FormControl,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/core"
import { BookingContext } from "../../context/BookingContext"
import { getClientFullName } from "../../store/client/selectors"
import { getBookingId } from "../../store/booking/selectors"

const options = {
  style: {
    base: {
      iconColor: "red",
      fontSize: "1rem",
      letterSpacing: "0.025em",
      textAlign: "center",
      "::placeholder": {
        color: "#A0AEC0",
      },
    },
    placeholder: "hello",
    invalid: {
      color: "#9e2146",
    },
  },
  hidePostalCode: true,
}

const Card = ({ onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false)
  const [checkoutError, setCheckoutError] = useState()
  const [activeField, setActiveField] = useState(false)
  const [clientSecret, setClientSecret] = useState("")
  const [state] = useContext(BookingContext)
  const elements = useElements()
  const stripe = useStripe()

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError()
  }

  const clientFullName = getClientFullName(state)
  const bookingId = getBookingId(state)

  const fetchClientSecret = async state => {
    const data = await postPaymentIntent(bookingId)
    setClientSecret(data.client_secret)
  }

  useEffect(() => {
    fetchClientSecret(state)
  }, [])

  const handleSubmit = async ev => {
    ev.preventDefault()
    setProcessingTo(true)
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: clientFullName,
        },
      },
    })
    if (payload.error) {
      setCheckoutError(`Payment failed ${payload.error.message}`)
      setProcessingTo(false)
    } else {
      setCheckoutError(null)
      setProcessingTo(false)
      console.log("success with payment")
      onSuccessfulCheckout()
    }
  }

  const CheckoutError = () => {
    return (
      <Alert status="error" mt={4}>
        <AlertIcon />
        <AlertDescription>{checkoutError}</AlertDescription>
      </Alert>
    )
  }

  const numberBorder = activeField ? "teal.400" : "grey.200"

  return (
    <div>
      <Box witdh="100%" rounded="lg" className="card-big">
        <Box>
          <Heading as="h3" size="lg" mb="5">
            Card info
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Box
                py={2}
                px={2}
                rounded="md"
                borderWidth="1px"
                borderColor={numberBorder}
                w={400}
              >
                <CardElement
                  options={options}
                  onChange={handleCardDetailsChange}
                  onBlur={() => setActiveField(false)}
                  onFocus={() => setActiveField(true)}
                />
              </Box>
              {checkoutError && <CheckoutError />}
            </FormControl>

            <Button type="submit" disabled={isProcessing || !stripe} mt={5}>
              {isProcessing ? "Processing..." : "Place order"}
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  )
}

export default Card
