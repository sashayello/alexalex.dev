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
                        Hey, I'm Alex. I'm a Frontend developer from Ukraine. Everyday i'm using React and NextJS as my basic stack of tehnologies.
                        I have more than 6+ years of expirience in development.
                    </Text>
                    <Section delay={.1}>
                        <Text mb={7} fontSize="md" fontWeight={500} color={useColorModeValue('gray.600', 'gray.400')}>
                            I grew up in Chernigov which is located in the north of Ukraine.
                            Graduated from the radio-mechanical technical school as a specialist in the maintenance of computer and intelligent systems and networks. 💻 <br />
                            I spend my free time watching fimls, looking for new things in developmetn, learning new staff as a developer
                            and enjoying time with friends and family.
                        </Text>
                    </Section>
                    <Divider my={6} />
                    <Section delay={.2}>
                        <Heading as="h2" variant="section-title" mt={10}>Timeline</Heading>
                        <Text mb={7} fontSize="md" fontWeight={500} color={useColorModeValue('black.600', 'black.400')}>
                            ✅ &nbsp;<b>2015</b> -  I start my carier as Frontend developer in &nbsp;
                            <Link href="https://redlab.bz/" target="_blank">RedLab Digital Agency</Link>.
                            Most of my work consisted of UI development and template landing on Wordpress CMS.
                            I got a lot of experience as a developer and project manager.
                        </Text>
                        <Text mb={7} fontSize="md" fontWeight={500} color={useColorModeValue('black.600', 'black.400')}>
                            ✅ &nbsp;<b>End of 2017 - Early 2018</b> -  After i have some expirience as Frelancer. But for me it's not a cool.
                            Basicly more, i'm love work with team.
                        </Text>
                        <Text mb={7} fontSize="md" fontWeight={500} color={useColorModeValue('black.600', 'black.400')}>
                            ✅ &nbsp;<b>2018 - 2019</b> -  This year was one of the beast for me, i started worked as Javascript developer.
                            I was creating a Web and Mobile application. "Web" - it's was a REST API based on NodeJS and Express framework with MySQL DB. For "Mobile" -
                            we are using Angular and Ionic. But unfortunately the app is stoped after one year development. The <Link href="https://beatom.net/" target="_blank">Beatom</Link> comapny.
                        </Text>
                        <Text mb={7} fontSize="md" fontWeight={500} color={useColorModeValue('black.600', 'black.400')}>
                            ✅ &nbsp;<b>From 2019 - To 2020</b> - <Link href="https://www.ngsoft.com/" target="_blank">NgSoft</Link> - as Angular developer. The project was stopped due to quarantine.
                            But this was one of biggest expirience worked with Europe.
                        </Text>
                        <Text mb={7} fontSize="md" fontWeight={500} color={useColorModeValue('black.600', 'black.400')}>
                            ✅ &nbsp;<b>2020 - Early 2021</b> - Was worked as Freelancer and Self Lerning. Basicly work with ReactJS and React-Native with UpWork Team.
                            An interesting project for people who need mental support. The user could anonymously describe their problems directly with a psychotherapist.
                        </Text>
                        <Text mb={7} fontSize="md" fontWeight={500} color={useColorModeValue('black.600', 'black.400')}>
                            ✅ &nbsp;<b>2021 - present</b> - Frontend Developer at <Link href="https://dotsplatform.com/" target="_blank">DotsPlatform</Link>. As you read early we
                            build a a product that helps users launch their food delivery. The best team I've ever worked with.
                        </Text>
                    </Section>
                </Box>
            </Container>
        </Layout>
    )
}

export default About