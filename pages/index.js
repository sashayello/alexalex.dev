import React from 'react'
import NextLink from 'next/link'
import { Container, Box, Heading, Text, Image, Link, Button, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/layout'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')} p={3} mb={6} align="center" color={useColorModeValue('black', 'white')} borderStyle="solid" borderWidth={2}>
          Hi! I'am a Frontend developer based in Ukraine! 🇺🇦
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h1" variant="title">
              Alexandr Lobanov
            </Heading>
            <Text fontSize="sm" mt={2} mb={5} color={useColorModeValue('gray.400', 'gray.600')}>
              Frontend developer at <Link href="https://dotsplatform.com/" target="_blank">DotsPlatform</Link>
            </Text>
            <Text fontSize="md">
              I am developing a web-product that helps users launch their food delivery. Working with React and Next JS.
            </Text>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center" alignSelf="center">
            <Image
              borderColor="whiteAlpha.100"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/alexdev.jpg"
              filter={useColorModeValue("grayscale(1)", "grayscale(0)")}
              alt="Profile" />
          </Box>
        </Box>
        <Section delay={.1}>
          <Heading as="h3" variant="section-title" mt={10}>
            A little about me
          </Heading>
          <BioSection borderBottomWidth={1} mb={2}>
            <BioYear>1991</BioYear>
            Born in Chernihiv, Ukraine. 🥺
          </BioSection>
          <BioSection borderBottomWidth={1} mb={2}>
            <BioYear>2011</BioYear>
            Graduated from the radio-mechanical technical school, junior specialist, maintenance of computer and intelligent systems and networks. 🧑‍🎓
          </BioSection>
          <BioSection borderBottomWidth={1} mb={2}>
            <BioYear>2013 - 2015</BioYear>
            Self-learning, looking for interesting things. 🥶
          </BioSection>
          <BioSection borderBottomWidth={1} mb={2}>
            <BioYear>2015-2017</BioYear>
            First postion as Frontend developer <Link href="https://redlab.bz/" target="_blank">RedLab Digital Agency</Link>. 💻
          </BioSection>
          <BioSection borderBottomWidth={1} mb={2}>
            <BioYear>End of 2017 - Early 2018</BioYear>
            Work as Freelancer. 💻
          </BioSection>
          <BioSection borderBottomWidth={1} mb={2}>
            <BioYear>2018 - 2019</BioYear>
            Work as Frontend and Mobile developer at <Link href="https://beatom.net/" target="_blank">Beatom</Link>. 💻
          </BioSection>
          <BioSection borderBottomWidth={1} mb={2}>
            <BioYear>2019-2020</BioYear>
            <Link href="https://www.ngsoft.com/" target="_blank">NgSoft</Link> - as Angular developer. 💻
          </BioSection>
          <BioSection borderBottomWidth={1} mb={2}>
            <BioYear>2020 - Early 2021</BioYear>
            Was worked as Freelancer and Self Lerning. Basicly work with ReactJS and React-Native with UpWork Team. 💻 📱
          </BioSection>
          <BioSection borderBottomWidth={1} mb={2}>
            <BioYear>2021 - present</BioYear>
            Frontend Developer at <Link href="https://dotsplatform.com/" target="_blank">DotsPlatform</Link>. 💻
          </BioSection>
          <Box align="center" my={4}>
            <NextLink href="/about">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">More About Me</Button>
            </NextLink>
          </Box>
        </Section>
      </Container >
    </Layout>
  )
}

export default Page