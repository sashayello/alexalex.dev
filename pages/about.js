import { Container, Box, Heading, Text, Divider, Link, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/layout'

const About = () => {
    return (
        <Layout title={'About Me'}>
            <Container>
                <Box flexGrow={1}>
                    <Heading as="h1" variant="title">
                        About Me
                    </Heading>
                    <Text fontSize="sm" mt={2} mb={5} color={useColorModeValue('gray.400', 'purple')}>
                        Alex Lobanov - Frontend developer.
                    </Text>
                    <Text mb={7} fontSize="md" fontWeight={500} color={useColorModeValue('gray.600', 'gray.400')}>
                        First block about me
                    </Text>
                    <Text mb={7} fontSize="md" fontWeight={500} color={useColorModeValue('gray.600', 'gray.400')}>
                        Second block about me
                    </Text>
                </Box>
            </Container>
        </Layout>
    )
}

export default About