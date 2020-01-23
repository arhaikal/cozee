
import React from 'react';
import { Box, Flex, Text, Button, Heading } from '@chakra-ui/core'

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
    </Box>
  );
}
