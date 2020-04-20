import React, { useContext } from "react"
import { BookingContext } from "../context/BookingContext"
import { format } from "date-fns"
import {
  Flex,
  Box,
  Text,
  Stat,
  StatLabel,
  StatHelpText,
  StatNumber,
  Divider,
} from "@chakra-ui/core"
import { MdLocationOn } from "react-icons/md"
import { IoMdCalendar, IoMdPerson } from "react-icons/io"
import { getClient } from "../store/client/selectors"
import { selectedHomeServiceDuration } from "../store/services/selectors"

export const BookingSummary = () => {
  const [state] = useContext(BookingContext)

  const dateParser = rawDate => {
    let a = rawDate.split(/[^0-9]/)
    let date = new Date(Date.UTC(a[0], a[1] - 1, a[2], a[3], a[4], a[5]))
    return date
  }

  const client = getClient(state)

  const anyUserInput = () => {
    if (client.firstName || client.lastName || client.email || client.phone) {
      return true
    }

    return false
  }

  return (
    <Box rounded="lg" className="card-big-side">
      <Flex direction="column" mt={6}>
        <Stat>
          <StatLabel>Home Cleaning</StatLabel>
          <StatNumber color="teal.400">
            € {state.booking.data.total_cost}
          </StatNumber>
          <Flex direction="row" justify="space-between" width="75%">
            <StatHelpText>
              {selectedHomeServiceDuration(state)} hours
            </StatHelpText>
            <StatHelpText>{state.booking.data.frequency}</StatHelpText>
          </Flex>
        </Stat>

        <Divider borderColor="teal.400" mt={8} />

        {state.address.data && (
          <Flex direction="row" mt={8}>
            <Box as={MdLocationOn} size="24px" color="teal.400" />
            <Text fontSize="md" ml={2}>
              {state.address.data.formatted_address}
            </Text>
          </Flex>
        )}

        {anyUserInput() && (
          <Flex direction="row" mt={6}>
            <Box as={IoMdPerson} size="24px" color="teal.400" />
            <Box ml={2}>
              <Text fontSize="md">
                {client.firstName} {client.lastName}
              </Text>
              <Text fontSize="sm">{client.email}</Text>
              <Text fontSize="sm">{client.phone} </Text>
            </Box>
          </Flex>
        )}

        {state.booking.data.starts_at && (
          <Flex direction="row" mt={6}>
            <Box as={IoMdCalendar} size="24px" color="teal.400" />
            <Flex direcation="row" justify="space-between" ml={2} w="75%">
              <Text>
                {format(dateParser(state.booking.data.starts_at), "EEE dd.MM")}
              </Text>
              <Text fontSize="md" color="gray.400">
                {format(dateParser(state.booking.data.starts_at), "HH:mm")}-
                {format(dateParser(state.booking.data.ends_at), "HH:mm")}
              </Text>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Box>
  )
}
