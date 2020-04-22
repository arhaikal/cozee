import React, { useState, useContext } from "react"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
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
import { getClientFullName, getClientEmail } from "../../store/client/selectors"

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
  const [state] = useContext(BookingContext)
  const elements = useElements()
  const stripe = useStripe()

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError()
  }

  const clientFullName = getClientFullName(state)
  const clientEmail = getClientEmail(state)

  const handleSubmit = async ev => {
    ev.preventDefault()

    if (!stripe || !elements) {
      return
    }
    const billingDetails = {
      name: clientFullName,
      email: clientEmail,
      address: state.address.data.formatted_address,
    }

    setProcessingTo(true)

    try {
      //add call to payment intent to get clientSecret back

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: billingDetails,
      })

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message)
        setProcessingTo(false)
        return
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      })

      if (error) {
        setCheckoutError(error.message)
        setProcessingTo(false)
        return
      }

      onSuccessfulCheckout()
    } catch (err) {
      setCheckoutError(err)
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
