
import React from 'react'
import { Box, Flex, Text, Button, Heading } from '@chakra-ui/core'
import { CustomRadio } from './custom-radio';

export const Calendar = () => {
  return (
    <Box witdh="100%" rounded="lg" className="card-big" >
      <Heading as="h3" size="lg" mb="5">When can we clean?</Heading>
      <Flex justify="space-between">
        <Button leftIcon="arrow-back" variantColor="teal" variant="ghost">
          Previous Week
        </Button>
        <Text textAlign="center" fontSize="lg">
          Week 22
        </Text>
        <Button rightIcon="arrow-forward" variantColor="teal" variant="ghost">
          Next Week
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
