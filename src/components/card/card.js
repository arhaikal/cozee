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
      fontSize: '1rem',
      letterSpacing: '0.025em',
      '::placeholder': {
        color: '#A0AEC0',
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
  const [activeField, setActiveField] = useState(
    {
      cardNumber: false,
      date: false,
      csv: false,
    });


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

  const numberBorder = activeField.cardNumber ? 'teal.400' : 'grey.200'
  const dateBorder = activeField.date ? 'teal.400' : 'grey.200'
  const csvBorder = activeField.csv ? 'teal.400' : 'grey.200'

  return (
    <div>
      <Box witdh="100%" rounded="lg" className="card-big">
        <Box>
          <Heading as="h3" size="lg" mb="5">Card info</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
              <Box
                py={2}
                px={4}
                rounded="md"
                borderWidth="1px"
                borderColor={numberBorder}
              >
                <CardNumberElement
                  id="cardNumber"
                  options={ELEMENT_OPTIONS}
                  onBlur={() => setActiveField({ cardNumber: false })}
                  onChange={logEvent('change')}
                  onFocus={() => setActiveField({ cardNumber: true })}
                  onReady={logEvent('ready')}
                />
              </Box>
            </FormControl>


            <Flex>
              <FormControl>
                <FormLabel htmlFor="cardNumber">Expiry Date</FormLabel>
                <Box
                  borderWidth="1px"
                  p={2}
                  borderColor={dateBorder}
                  py={2}
                  px={4}
                  rounded="md">
                  <CardExpiryElement
                    id="expiry"
                    onBlur={() => setActiveField({ date: false })}
                    onFocus={() => setActiveField({ date: true })}
                    onChange={logEvent('change')}
                    onReady={logEvent('ready')}
                    options={ELEMENT_OPTIONS}
                  />
                </Box>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="cardNumber">CSV</FormLabel>
                <Box
                  borderWidth="1px"
                  p={2}
                  borderColor={csvBorder}
                  py={2}
                  px={4}
                  rounded="md">
                  <CardCvcElement
                    id="cvc"
                    onBlur={() => setActiveField({ csv: false })}
                    onFocus={() => setActiveField({ csv: true })}
                    onChange={logEvent('change')}
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
