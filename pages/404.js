import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/layout'

const NotFound = () => (
    <Layout title="Not Found | 404">
        <Container>
            <Heading as="h1" variant="title">Not Found</Heading>
            <Text>Ooops! 🛑 &nbsp; The page you are looking fro is missing. 😱</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="purple">Return to home</Button>
                </NextLink>
            </Box>
        </Container>

    </Layout >
)

export default NotFound