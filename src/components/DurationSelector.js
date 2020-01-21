
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Form, Card } from 'react-bootstrap';
import { TIME } from './data';
import { Select, Text } from '@chakra-ui/core';

export const DurationSelector = () => {
  const [state, dispatch] = useContext(BookingContext);
  const updateDuration = (e) => {
    dispatch(updateBooking({ duration: e.target.value }, state, dispatch))
  };

  return (
    <Card className={"card-big"}>
      <Card.Body>
        <Text fontSize="2xl">How many hours should we clean?</Text>
        <Select placeholder="Select option"
          as="select"
          name="duration"
          onChange={updateDuration}
          defaultValue={state.booking.duration} >
          {TIME.map((obj, key) => <option value={obj.hours} disabled="" key={key}>{`${obj.hours} hours`}</option>)}
          >
        </Select>
      </Card.Body>
    </Card>
  );
}