import React from 'react'
import {Button, Flex, Heading, Link, ListItem} from "@chakra-ui/react";
import {IoLogoGithub} from "react-icons/io5";

type PortfolioItemT = {
    heading: string
    btnText: string
    link: string
}

const PortfolioItem = ({heading, btnText, link}: PortfolioItemT) => {
    return (
        <ListItem>
            <Flex align={"center"} justifyContent={"space-between"}>
                <Heading as={"h4"} size={"sm"}>
                    {heading}
                </Heading>

                <Link href={link} target="_blank">
                    <Button
                        variant="ghost"
                        colorScheme="teal"
                        size={"sm"}
                        leftIcon={<IoLogoGithub/>}
                    >
                        {btnText}
                    </Button>
                </Link>
            </Flex>
        </ListItem>
    )
}

export default PortfolioItem