
import React, { useState, useContext, useEffect } from 'react'
import { Box, Flex, Text, Button, Heading, RadioButtonGroup } from '@chakra-ui/core';
import { CustomRadio } from './custom-radio';
import { AvailableBookingTimesContext } from '../context/AvailableBookingTimesContext';
import { BookingContext } from '../context/BookingContext';
import { getBookingTimes, updateBooking } from '../actions/index';
import { calendarDate } from '../calendar-data';
import { format, getWeek, endOfWeek, startOfWeek, addWeeks, subWeeks, eachDayOfInterval } from 'date-fns'


export const Calendar = () => {
  const [availableTimesState, availableTimesDispatch] = useContext(AvailableBookingTimesContext);
  const [bookingState, bookingDispatch] = useContext(BookingContext);
  const [calendar, setCalendar] = useState(
    {
      currentWeek: getWeek(new Date()),
      selectedWeek: getWeek(new Date()),
      weekStartDate: format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy/MM/dd'),
      weekEndDate: format(endOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy/MM/dd'),
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
        weekStartDate: format(startOfWeek(addWeeks(new Date(calendar.weekStartDate), 1)), 'yyyy/MM/dd'),
        weekEndDate: format(endOfWeek(addWeeks(new Date(calendar.weekEndDate), 1)), 'yyyy/MM/dd'),
      })
  }

  const prevWeek = () => {
    const subtractWeek = calendar.selectedWeek - 1
    setCalendar(
      {
        ...calendar,
        selectedWeek: subtractWeek,
        weekStartDate: format(startOfWeek(subWeeks(new Date(calendar.weekStartDate), 1)), 'yyyy/MM/dd'),
        weekEndDate: format(endOfWeek(subWeeks(new Date(calendar.weekEndDate), 1)), 'yyyy/MM/dd'),
      })
  }

  const getDayAvailability = (day) => {
    return availableTimesState.available_times.filter((date) => {
      let queriedDate = format(new Date(date["from"]), 'yyyy/MM/dd')
      let weekDay = format(new Date(day), 'yyyy/MM/dd')
      return queriedDate === weekDay
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
                <Heading as="h5" size="sm">{format(new Date(day['from']), 'MMMM dd, yyyy')}</Heading>
                <Text fontSize="lg">at {format(new Date(day['from']), 'HH:mm')}</Text>
              </Flex>
            </Button >
          </>
        );
      });
    }
  }


  const weekDates = eachDayOfInterval({
    start: new Date(calendar.weekStartDate),
    end: new Date(calendar.weekEndDate)
  })

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
            mt={3} key={day['id']} value={format(new Date(day['from']), 'HH:mm')}
          >
            {format(new Date(day['from']), 'HH:mm')}
          </Button>
        </Flex>
      );
    });
  }

  const daysOfWeek = weekDates.map(date => {
    return (
      <Flex justify="space-between" mt={8} direction="column">
        <Box key={date}>
          <Heading as="h6" size="xs">
            {format(new Date(date), 'EEEEEE')}
          </Heading>
          <Text fontSize="sm">
            {format(new Date(date), 'LLL dd')}
          </Text>
        </Box>
        <Box>
          {dayTimes(date)}
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
