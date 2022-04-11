import React from 'react'
import {Box, Container} from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "../navbar";
import Footer from "../footer";

const Main: ({children, router}: { children: any; router: any }) => JSX.Element = ({children, router}) => {
  return (
      <Box as={"main"} pb={8}>
          <Head>
              <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
              <title>Daniil Silin - Main</title>
          </Head>

          <NavBar path={router.asPath}/>

          <Container maxW={"container.md"} pt={14}>
              {children}
              <Footer/>
          </Container>
      </Box>
  )
}

export default Main