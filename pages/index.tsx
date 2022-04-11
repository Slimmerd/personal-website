import type {NextPage} from 'next'
import NextLink from 'next/link'
import {Box, Button, Container, Flex, Heading, UnorderedList} from "@chakra-ui/react";
import {ChevronRightIcon, EmailIcon} from "@chakra-ui/icons";
import {IoDocument, IoLogoGithub} from "react-icons/io5";
import Section from "../components/utils/section";
import styled from "@emotion/styled";
import PortfolioItem from "../components/main/portfolioItem";
import {Paragraph} from "../components/utils/paragraph";

const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`

const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`


const Home: NextPage = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={'red.500'} p={3} mt={4} mb={6} textAlign={'center'} textColor={"whiteAlpha.900"}>
                Hello, I&apos;m looking for a frontend developer job in the UK!
            </Box>

            <Box display={{md: 'flex'}} mb={4}>
                <Box flexGrow={1}>
                    <Heading as={'h2'}>
                        Daniil Silin
                    </Heading>
                    <p>
                        Full stack developer
                    </p>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" size={"lg"} mb={2}>
                    About me
                </Heading>
                <Paragraph>
                    I&apos;m a full stack developer with advanced experience in frontend. I&apos;m passionate about
                    learning new
                    technologies and developing something new. I have developed, deployed and maintained several public
                    and private web projects and tools.
                    I have experience working directly with clients, participating in every stage of a project.
                    I like to work across the project, participating in the frontend and backend development.
                </Paragraph>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" size={"lg"} mb={2}>
                    For hire
                </Heading>
                <Paragraph>
                    I&apos;m currently interested in Frontend jobs. Feel free to reach out to me.
                    I&apos;m open to different opportunities and would love to learn more about you and the work you do.
                </Paragraph>

                <Flex justifyContent={"center"} my={4} gap={4}>
                    <Box>
                        <NextLink href="mailto:daniil_silin@gmail.com" scroll={false} passHref>
                            <Button leftIcon={<EmailIcon/>} colorScheme="teal">
                                Email me
                            </Button>
                        </NextLink>
                    </Box>
                    <Box>
                        <NextLink href="" scroll={false} passHref>
                            <Button leftIcon={<IoDocument/>} colorScheme="teal">
                                CV
                            </Button>
                        </NextLink>
                    </Box>
                    <Box>
                        <a href="https://github.com/Slimmerd" target="_blank" rel="noopener noreferrer">
                            <Button leftIcon={<IoLogoGithub/>} colorScheme="teal">
                                Github
                            </Button>
                        </a>
                    </Box>
                </Flex>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" size={"lg"} mb={2}>
                    Experience
                </Heading>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Worked as full stack engineer at &quot;Golden Link&quot; in Moscow
                </BioSection>

                <BioSection>
                    <BioYear>2020 to present</BioYear>
                    Works as a freelance
                </BioSection>
            </Section>

            <Section delay={0.4}>
                <Heading as="h3" size={"lg"} mb={2}>
                    Portfolio
                </Heading>
                <UnorderedList>
                    <PortfolioItem heading={"Expedition website"}
                                   btnText={"RI0Fwebsite"}
                                   link={"https://github.com/Slimmerd/RI0Fwebsite"}
                    />
                    <PortfolioItem heading={"Amateur radio club website"}
                                   btnText={"hamradio-website"}
                                   link={"https://github.com/Slimmerd/hamradio-website"}
                    />
                    <PortfolioItem heading={"Habits and Todos tracker app"}
                                   btnText={"habit_tracker"}
                                   link={"https://github.com/Slimmerd/habit_tracker"}
                    />
                </UnorderedList>

                <Box textAlign="center" my={4}>
                    <NextLink href="/portfolio" scroll={false} passHref>
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                            More
                        </Button>
                    </NextLink>
                </Box>
            </Section>
        </Container>
    )
}

export default Home
