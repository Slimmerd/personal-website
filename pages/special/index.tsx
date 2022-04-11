import React from 'react';
import {Badge, Container, Heading, ListItem, UnorderedList} from "@chakra-ui/react";
import Section from "../../components/utils/section";

const SpecialPage = () => {
    return (
        <Container>
            <Heading as={"h2"} mb={4}>Special projects</Heading>

            <Section>
                <UnorderedList>
                    <ListItem>
                        <Badge colorScheme={"green"} mr={2}>
                            Under development
                        </Badge>
                        Travel stats
                    </ListItem>

                    <ListItem>
                        <Badge colorScheme={"red"} mr={2}>
                            Frozen
                        </Badge>
                        Food delivery
                    </ListItem>

                    <ListItem>
                        <Badge colorScheme={"gray"} mr={2}>
                            IDEA
                        </Badge>
                        Product company
                    </ListItem>
                </UnorderedList>
            </Section>


        </Container>
    );
};

export default SpecialPage;
