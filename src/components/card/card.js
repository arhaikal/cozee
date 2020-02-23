import React, { useState, useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';
import ReactDOM from 'react-dom';
import {
  CardNumberElement,
  CardElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Button, Box, Heading, FormLabel, FormControl, Input, Flex } from "@chakra-ui/core";
import { logEvent, Result, ErrorResult } from '../util';


const options = {
  style: {
    base: {
      iconColor: 'red',
      fontSize: '1rem',
      letterSpacing: '0.025em',
      textAlign: 'center',
      '::placeholder': {
        color: '#A0AEC0',
      },
    },
    placeholder: 'hello',
    invalid: {
      color: '#9e2146',
    },
  },
  hidePostalCode: true
};

const Card = () => {
  const [state, dispatch] = useContext(BookingContext);
  const elements = useElements();
  const stripe = useStripe();
  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [activeField, setActiveField] = useState(
    {
      cardNumber: false,
    });


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    console.log("[PaymentMethod]", payload);

    if (payload.error) {
      console.log('[error]', payload.error);
      setErrorMessage(payload.error.message);
      setPaymentMethod(null);
    } else {
      console.log('[PaymentMethod]', payload.paymentMethod);
      setPaymentMethod(payload.paymentMethod);
      setErrorMessage(null);
    }
  };

  const numberBorder = activeField.cardNumber ? 'teal.400' : 'grey.200'

  return (
    <div>
      <Box witdh="100%" rounded="lg" className="card-big">
        <Box>
          <Heading as="h3" size="lg" mb="5">Card info</Heading>
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
                  onBlur={() => setActiveField({ cardNumber: false })}
                  onFocus={() => setActiveField({ cardNumber: true })}
                  onReady={() => {
                    console.log("CardElement [ready]");
                  }}
                  onChange={event => {
                    console.log("CardElement [change]", event);
                  }}
                />
              </Box>
              {errorMessage && <ErrorResult>{errorMessage}</ErrorResult>}
              {paymentMethod && <Result>Got PaymentMethod: {paymentMethod.id}</Result>}
            </FormControl>


            <Button type="submit" disabled={!stripe} mt={5}>
              Place order
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Card;
