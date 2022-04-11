import React, {ReactElement} from 'react'
import {Box, Button, Flex, Heading} from "@chakra-ui/react";
import {Paragraph} from "../utils/paragraph";
import NextLink from "next/link";
import Section from "../utils/section";
import {IoDocument, IoLogoGithub} from "react-icons/io5";

type ProjectCardT = {
    heading: string
    status: ReactElement
    paragraph: string
    sourceLink?: string
    sourceDisabled?: boolean
    resultLink?: string
    resultDisabled?: boolean
    delay: number
}

const ProjectCard = ({
                         heading,
                         status,
                         paragraph,
                         sourceLink,
                         resultLink,
                         sourceDisabled = false,
                         resultDisabled = false,
                         delay
                     }: ProjectCardT) => {
    return (
        <Section delay={delay}>
            <Heading as={"h3"} size={"lg"}>{heading}</Heading>
            <Flex gap={4} my={1}>
                {status}
            </Flex>

            <Paragraph>
                {paragraph}
            </Paragraph>

            <Flex gap={3} mt={2}>
                {sourceLink &&
                    <Box>
                        <NextLink href={sourceLink} scroll={false} passHref>
                            <Button leftIcon={<IoLogoGithub/>} colorScheme="teal" variant={"ghost"} size={"sm"}
                                    isDisabled={sourceDisabled}>
                                Source
                            </Button>
                        </NextLink>
                    </Box>
                }
                {resultLink &&
                    <Box>
                        <NextLink href={resultLink} scroll={false} passHref>
                            <Button leftIcon={<IoDocument/>} colorScheme="teal" size={"sm"} variant={"ghost"}
                                    isDisabled={resultDisabled}>
                                Result
                            </Button>
                        </NextLink>
                    </Box>
                }
            </Flex>
        </Section>
    )
}

export default ProjectCard