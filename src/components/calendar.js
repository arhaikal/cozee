
import React, { useState, useContext } from 'react'
import { Box, Flex, Text, Button, Heading } from '@chakra-ui/core'
import { CustomRadio } from './custom-radio';
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)

export const Calendar = () => {

  console.log(dayjs().format());
  const [calendar, setCalendar] = useState(
    {
      currentWeek: dayjs().week(),
      selectedWeek: dayjs().week(),
    }
  )

  const nextWeek = () => {
    setCalendar({ ...calendar, selectedWeek: calendar.selectedWeek + 1 })
  }

  const prevWeek = () => {
    setCalendar({ ...calendar, selectedWeek: calendar.selectedWeek - 1 })
  }


  const currentWeek = () => {
  }
  return (
    <Box witdh="100%" rounded="lg" className="card-big" alignItems="center" >
      <Heading as="h3" size="lg" mb="5" alignItems="center">When can we clean?</Heading>
      <Flex justify="space-between">
        <Button leftIcon="arrow-back" variantColor="teal" variant="ghost" onClick={getTimes} disabled={calendar.selectedWeek <= calendar.currentWeek}>
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
        <Button
          mt="6"
          width="100%"
          size="lg"
          variantColor="teal" variant='outline'
          height='80px'
        >
          <Flex justify="space-between" direction='column'>
            <Heading as="h5" size="sm">Saturday 22 February</Heading>
            <Text fontSize="lg">at 14:00</Text>
          </Flex>
        </Button>
        <Button
          mt="6"
          width="100%"
          size="lg"
          variantColor="teal" variant='outline'
          height='80px'
        >
          <Flex justify="space-between" direction='column'>
            <Heading as="h5" size="sm">Friday 23 February</Heading>
            <Text fontSize="lg">at 17:00</Text>
          </Flex>
        </Button>
      </Flex>
      <Flex justify="space-between" mt={8}>
        <Box>
          <Box>
            <Heading as="h6" size="xs">
              Monday
          </Heading>
            <Text fontSize="sm">
              23. feb
          </Text>
          </Box>
          <Box>
            <Flex direction='column' justify="space-between">
              <CustomRadio mt={4}>
                14:00
            </CustomRadio>
              <CustomRadio mt={2}>
                15:00
            </CustomRadio>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Heading as="h6" size="xs">
            Tuesday
          </Heading>
          <Text fontSize="sm">
            24. feb
          </Text>
          <Box>
            <Flex direction='column' justify="space-between">
              <CustomRadio mt={4}>
                7:00
              </CustomRadio>
              <CustomRadio mt={2}>
                9:00
              </CustomRadio>
              <CustomRadio mt={2}>
                13:00
              </CustomRadio>
              <CustomRadio mt={2}>
                17:00
              </CustomRadio>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Heading as="h6" size="xs">
            Wednesday
          </Heading>
          <Text fontSize="sm">
            25. feb
          </Text>
          <Box>
            <Flex direction='column' justify="space-between">
              <CustomRadio mt={4}>
                7:00
              </CustomRadio>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Heading as="h6" size="xs">
            Thursday
          </Heading>
          <Text fontSize="sm">
            26. feb
          </Text>
          <Box>
            <Flex direction='column' justify="space-between">
              <CustomRadio mt={4}>
                7:00
              </CustomRadio>
              <CustomRadio mt={2}>
                9:00
              </CustomRadio>
              <CustomRadio mt={2}>
                13:00
              </CustomRadio>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Heading as="h6" size="xs">
            Friday
          </Heading>
          <Text fontSize="sm">
            27. feb
          </Text>
        </Box>
        <Box>
          <Heading as="h6" size="xs">
            Saturday
          </Heading>
          <Text fontSize="sm">
            28. feb
          </Text>
          <Box>
            <Flex direction='column' justify="space-between">
              <CustomRadio mt={4}>
                7:00
              </CustomRadio>
              <CustomRadio mt={2}>
                9:00
              </CustomRadio>
              <CustomRadio mt={2}>
                13:00
              </CustomRadio>
              <CustomRadio mt={2}>
                17:00
              </CustomRadio>
              <CustomRadio mt={2}>
                19:00
              </CustomRadio>
            </Flex>
          </Box>
        </Box>
        <Box>
          <Heading as="h6" size="xs">
            Sunday
          </Heading>
          <Text fontSize="sm">
            29. feb
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
