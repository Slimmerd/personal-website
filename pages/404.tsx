import React from 'react';
import NextLink from "next/link";
import {Box, Text, Button, Container, Divider, Heading} from "@chakra-ui/react";

const NotFoundPage = () => {
    return (
        <Container>
            <Heading as="h1">404 - Not found</Heading>
            <Text>Page not found.</Text>
            <Divider my={6} />
            <Box my={6} textAlign="center">
                <NextLink href="/" passHref>
                    <Button colorScheme="teal">Home</Button>
                </NextLink>
            </Box>
        </Container>
    );
};

export default NotFoundPage;
