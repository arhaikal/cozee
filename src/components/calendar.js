
import React, { useState, useContext, useEffect } from 'react'
import { Box, Flex, Text, Button, Heading, RadioButtonGroup } from '@chakra-ui/core';
import { CustomRadio } from './custom-radio';
import moment from 'moment-with-locales-es6';
import { AvailableBookingTimesContext } from '../context/AvailableBookingTimesContext';
import { BookingContext } from '../context/BookingContext';
import { getBookingTimes } from '../actions/index';
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
  const updateCleaningTime = (e) => {
    console.log(e)
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


  const weekArray = moment.weekdaysShort(true)
  weekArray.shift();

  const formatDayOfWeek = (week, day) => moment().isoWeek(week).day(`${day}`).format('MMM DD YYYY')



  const dayTimes = (weekDay) => {
    return getDayAvailability(weekDay).map(day => {
      return (
        <Flex direction='column' justify="space-between">
          <CustomRadio mt={3} key={day['id']} value={moment(day["start_time"]).format('h:mm a')}>
            {moment(day["from"]).format('HH:mm')}
          </CustomRadio>
        </Flex>
      );
    });
  }

  const daysOfWeek = weekArray.map(day => {
    return (
      <RadioButtonGroup
        name="time"
        onChange={updateCleaningTime}
      >
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
      </RadioButtonGroup>
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
        <Button
          mt="6"
          width="100%"
          size="lg"
          variantColor="teal" variant='outline'
          height='80px'
        >
          <Flex justify="space-between" direction='column'>
            <Heading as="h5" size="sm">Thursday 19 February</Heading>
            <Text fontSize="lg">at 15:00</Text>
          </Flex>
        </Button>
      </Flex>

      <Flex justify="space-between" mt={8}>
        {daysOfWeek}
      </Flex>
    </Box>
  );
}
