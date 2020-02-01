
import React, { useState, useContext, useEffect } from 'react'
import { Box, Flex, Text, Button, Heading, RadioButtonGroup } from '@chakra-ui/core';
import { CustomRadio } from './custom-radio';
import moment from 'moment-with-locales-es6';
import { AvailableBookingTimesContext } from '../context/AvailableBookingTimesContext';
import { BookingContext } from '../context/BookingContext';
import { getBookingTimes, updateBooking } from '../actions/index';
import { calendarDate } from '../calendar-data';


export const Calendar = () => {
  const [availableTimesState, availableTimesDispatch] = useContext(AvailableBookingTimesContext);
  const [bookingState, bookingDispatch] = useContext(BookingContext);
  const [calendar, setCalendar] = useState(
    {
      currentWeek: moment().week(),
      selectedWeek: moment().week(),
      weekStartDate: moment().startOf('isoWeek').format('YYYY/MM/DD'),
      weekEndDate: moment().endOf('isoWeek').format('YYYY/MM/DD'),
    }
  )
  const updateBookingTime = (e) => {
    bookingDispatch(updateBooking({ starts_at: e.from, ends_at: e.to }, bookingState, bookingDispatch))
  };

  const getTimes = () => {
    availableTimesDispatch(getBookingTimes({ from: calendar.weekStartDate, to: calendar.weekEndDate, duration: bookingState.booking.duration }, availableTimesState, availableTimesDispatch))
  };


  useEffect(() => { getTimes() }, [calendar.selectedWeek]);

  const nextWeek = () => {
    const addWeek = calendar.selectedWeek + 1
    setCalendar(
      {
        ...calendar,
        selectedWeek: addWeek,
        weekStartDate: moment().week(addWeek).startOf('isoWeek').format('YYYY/MM/DD'),
        weekEndDate: moment().week(addWeek).endOf('isoWeek').format('YYYY/MM/DD'),
      })
  }

  const prevWeek = () => {
    const subtractWeek = calendar.selectedWeek - 1
    setCalendar(
      {
        ...calendar,
        selectedWeek: subtractWeek,
        weekStartDate: moment().week(subtractWeek).startOf('isoWeek').format('YYYY/MM/DD'),
        weekEndDate: moment().week(subtractWeek).endOf('isoWeek').format('YYYY/MM/DD'),
      })
  }

  const getDayAvailability = (day) => {
    return availableTimesState.available_times.filter((date) => {
      let queriedMoment = moment(date["from"]).format('YYYY/MM/DD')
      let weekDay = moment(day).format('YYYY/MM/DD')
      return queriedMoment === weekDay
    })
  }

  function getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  const getRandomSlots = () => {
    if (availableTimesState.available_times.length != 0) {
      return getRandom(availableTimesState.available_times, 3).map((day) => {
        return (
          <>
            <Button
              mt="6"
              width="100%"
              size="lg"
              variantColor="teal" variant='outline'
              height='80px'
            >
              <Flex justify="space-between" direction='column'>
                <Heading as="h5" size="sm">{moment(day["from"]).format('MMMM DD, YYYY')}</Heading>
                <Text fontSize="lg">at {moment(day["from"]).format('HH:mm')}</Text>
              </Flex>
            </Button >
          </>
        );
      });
    }
  }


  const weekArray = moment.weekdaysShort(true)
  weekArray.shift();

  const formatDayOfWeek = (week, day) => moment().isoWeek(week).day(`${day}`).format('MMM DD YYYY')



  const dayTimes = (weekDay) => {
    return getDayAvailability(weekDay).map(day => {
      const selected = bookingState.booking.starts_at == day["from"]
      const border = selected ? 'solid' : 'outline'
      return (
        <Flex direction='column' justify="space-between">
          <Button
            variantColor="teal" variant={border}
            onClick={() => updateBookingTime(day)}
            variantColor="teal"
            mt={3} key={day['id']} value={moment(day["from"]).format('h:mm a')}
          >
            {moment(day["from"]).format('HH:mm')}
          </Button>
        </Flex>
      );
    });
  }

  const daysOfWeek = weekArray.map(day => {
    return (

      <Flex justify="space-between" mt={8} direction="column">
        <Box key={day}>
          <Heading as="h6" size="xs">
            {day}
          </Heading>
          <Text fontSize="sm">
            {formatDayOfWeek(calendar.selectedWeek, day)}
          </Text>
        </Box>
        <Box>
          {dayTimes(formatDayOfWeek(calendar.selectedWeek, day))}
        </Box>
      </Flex>
    );
  });

  const currentWeek = () => {
  }
  return (
    <Box witdh="100%" rounded="lg" className="card-big" alignItems="center" >
      <Heading as="h3" size="lg" mb="5" alignItems="center">When can we clean?</Heading>
      <Flex justify="space-between">
        <Button leftIcon="arrow-back" variantColor="teal" variant="ghost" onClick={prevWeek} disabled={calendar.selectedWeek <= calendar.currentWeek}>
          Week {calendar.selectedWeek - 1}
        </Button>
        <Text textAlign="center" fontSize="lg">
          Week {calendar.selectedWeek}
        </Text>
        <Button rightIcon="arrow-forward" variantColor="teal" variant="ghost" onClick={nextWeek} disabled={calendar.selectedWeek > calendar.currentWeek + 6}>
          Week {calendar.selectedWeek + 1}
        </Button>
      </Flex>

      <Flex justify="space-between" direction='column'>
        {getRandomSlots()}
      </Flex>

      <Flex justify="space-between" mt={8}>
        {daysOfWeek}
      </Flex>
    </Box>
  );
}
