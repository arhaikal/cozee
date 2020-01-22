
import React from 'react';
import { Box, Flex, Text, Button, Heading } from '@chakra-ui/core'

export const Calendar = () => {
  return (
    <Box witdh="100%" rounded="lg" className="card-big" >
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
          variantColor="teal" variant='solid'
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
          variantColor="teal" variant='solid'
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
          variantColor="teal" variant='solid'
        >
          <Flex justify="space-between" direction='column'>
            <Heading as="h5" size="sm">Saturday 22 February</Heading>
            <Text fontSize="lg">at 14:00</Text>
          </Flex>
        </Button>

      </Flex>
    </Box>
  );
}
