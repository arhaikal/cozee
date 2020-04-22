import React, { useState, useContext, useEffect } from "react"
import {
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
  Box,
  Flex,
  Text,
  Button,
  Heading,
  Spinner,
} from "@chakra-ui/core"
import { BookingContext } from "../context/BookingContext"
import { updateBooking } from "../store/booking/actions"
import { getBookingTimes } from "../store/available-booking-times/actions"
import {
  format,
  getWeek,
  endOfWeek,
  startOfWeek,
  addWeeks,
  subWeeks,
  eachDayOfInterval,
} from "date-fns"

export const Calendar = React.forwardRef(({ label }, ref) => {
  const [state, dispatch] = useContext(BookingContext)
  const [calendar, setCalendar] = useState({
    currentWeek: getWeek(new Date()),
    selectedWeek: getWeek(new Date()),
    weekStartDate: startOfWeek(new Date(), { weekStartsOn: 1 }),
    weekEndDate: endOfWeek(new Date(), { weekStartsOn: 1 }),
  })

  const updateBookingTime = e => {
    dispatch(
      updateBooking({ starts_at: e.from, ends_at: e.to }, state, dispatch)
    )
  }

  const getTimes = () => {
    dispatch(
      getBookingTimes(
        {
          from: calendar.weekStartDate,
          to: calendar.weekEndDate,
          duration: state.booking.data.duration,
        },
        state.availableTimes,
        dispatch
      )
    )
  }

  useEffect(() => {
    getTimes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calendar.selectedWeek])

  const nextWeek = () => {
    const addWeek = calendar.selectedWeek + 1
    setCalendar({
      ...calendar,
      selectedWeek: addWeek,
      weekStartDate: addWeeks(new Date(calendar.weekStartDate), 1),
      weekEndDate: addWeeks(new Date(calendar.weekEndDate), 1),
    })
  }

  const prevWeek = () => {
    const subtractWeek = calendar.selectedWeek - 1
    setCalendar({
      ...calendar,
      selectedWeek: subtractWeek,
      weekStartDate: subWeeks(new Date(calendar.weekStartDate), 1),
      weekEndDate: subWeeks(new Date(calendar.weekEndDate), 1),
    })
  }

  const getDayAvailability = day => {
    return state.availableTimes.data.filter(date => {
      let queriedDate = format(new Date(date["from"]), "yyyy/MM/dd")
      let weekDay = format(new Date(day), "yyyy/MM/dd")
      return queriedDate === weekDay
    })
  }

  const weekDates = eachDayOfInterval({
    start: new Date(calendar.weekStartDate),
    end: new Date(calendar.weekEndDate),
  })

  const dateParser = rawDate => {
    let a = rawDate.split(/[^0-9]/)
    let date = new Date(Date.UTC(a[0], a[1] - 1, a[2], a[3], a[4], a[5]))
    return date
  }

  const dayTimes = weekDay => {
    return getDayAvailability(weekDay).map(day => {
      const selected =
        state.booking.data.starts_at &&
        format(
          dateParser(state.booking.data.starts_at),
          "MMMM dd, yyyy HH:mm"
        ) === format(new Date(day["from"]), "MMMM dd, yyyy HH:mm")
      const border = selected ? "solid" : "outline"
      return (
        <Button
          variantColor="teal"
          variant={border}
          onClick={() => updateBookingTime(day)}
          mt={3}
          key={day["id"]}
          value={format(new Date(day["from"]), "HH:mm")}
          name={label}
          ref={ref}
          mr={2}
          p={{
            base: "10px 25px !important",
            sm: "10px 30px",
            md: "10px 15px !important",
          }}
        >
          {format(new Date(day["from"]), "HH:mm")}
        </Button>
      )
    })
  }

  const daysOfWeek = weekDates.map(date => {
    return (
      <Flex justify="space-between" mt={8} direction="column" maxWidth="100%">
        <Box key={date}>
          <Heading as="h6" size="xs">
            {format(new Date(date), "EEEEEE")}
          </Heading>
          <Text fontSize="sm">{format(new Date(date), "LLL dd")}</Text>
        </Box>
        <Box>
          <Flex direction={{ base: "row", md: "column" }} overflow="scroll">
            {dayTimes(date)}
          </Flex>
        </Box>
      </Flex>
    )
  })

  const CalendarContent = () => {
    if (!state.address.data) {
      return (
        <Alert
          status="warning"
          variant="subtle"
          flexDirection="column"
          justifyContent="center"
          textAlign="center"
          height="200px"
          bg="gray.100"
        >
          <AlertIcon color="gray.500" size="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Please fill in your address first!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            We need to know the location of your home so we can find the most
            suitable time for you
          </AlertDescription>
        </Alert>
      )
    }

    if (state.availableTimes.isLoading)
      return (
        <Box rounded="lg" className="card-big">
          <Spinner color="teal.400" size="xl" />
        </Box>
      )

    if (!calendar) return null

    return (
      <Box>
        <Flex justify="space-between">
          <Button
            leftIcon="arrow-back"
            variantColor="teal"
            variant="ghost"
            onClick={prevWeek}
            disabled={calendar.selectedWeek <= calendar.currentWeek}
          >
            Week {calendar.selectedWeek - 1}
          </Button>
          <Text textAlign="center" fontSize="lg">
            Week {calendar.selectedWeek}
          </Text>
          <Button
            rightIcon="arrow-forward"
            variantColor="teal"
            variant="ghost"
            onClick={nextWeek}
            disabled={calendar.selectedWeek > calendar.currentWeek + 6}
          >
            Week {calendar.selectedWeek + 1}
          </Button>
        </Flex>

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          maxWidth="100%"
        >
          {daysOfWeek}
        </Flex>
      </Box>
    )
  }

  return <CalendarContent />
})
