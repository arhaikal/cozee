import React, { useState, useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';
import ReactDOM from 'react-dom';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Button, Box, Heading, FormLabel, FormControl, Input, Flex } from "@chakra-ui/core";
import { logEvent, Result, ErrorResult } from '../util';


const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '18px',
      color: '#424770',
      letterSpacing: '0.025em',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

const Card = () => {
  const [state, dispatch] = useContext(BookingContext);
  const elements = useElements();
  const stripe = useStripe();
  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: state.booking.first_name,
        address: {
          postal_code: state.booking.zipcode,
        },
      },
    });

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

  return (
    <div>
      <Box witdh="100%" rounded="lg" className="card-big">
        <Box>
          <Heading as="h3" size="lg" mb="5">Card info</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
              <Box borderWidth="1px" w="202px" p={2}>
                <CardNumberElement
                  id="cardNumber"
                  onBlur={logEvent('blur')}
                  onChange={logEvent('change')}
                  onFocus={logEvent('focus')}
                  onReady={logEvent('ready')}
                  options={ELEMENT_OPTIONS}
                />
              </Box>
            </FormControl>


            <Flex>
              <FormControl isRequired>
                <FormLabel htmlFor="cardNumber">Expiry Date</FormLabel>
                <Box borderWidth="1px" w="90px" p={2}>
                  <CardExpiryElement
                    id="expiry"
                    onBlur={logEvent('blur')}
                    onChange={logEvent('change')}
                    onFocus={logEvent('focus')}
                    onReady={logEvent('ready')}
                    options={ELEMENT_OPTIONS}
                  />
                </Box>
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="cardNumber">Expiry Date</FormLabel>
                <Box borderWidth="1px" w="57px" p={2}>
                  <CardCvcElement
                    id="cvc"
                    onBlur={logEvent('blur')}
                    onChange={logEvent('change')}
                    onFocus={logEvent('focus')}
                    onReady={logEvent('ready')}
                    options={ELEMENT_OPTIONS}
                  />
                </Box>
              </FormControl>
            </Flex>
            {errorMessage && <ErrorResult>{errorMessage}</ErrorResult>}
            {paymentMethod && <Result>Got PaymentMethod: {paymentMethod.id}</Result>}
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
