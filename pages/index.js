import React from 'react'
import { Container, Box, Heading, Text } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center" color="white">
        Hello, I'am a Frontend developer based in Ukraine!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alexandr Lobanov
          </Heading>
          <Text fontSize="md">Some information about</Text>
        </Box>
      </Box>
    </Container>
  )
}

export default Page