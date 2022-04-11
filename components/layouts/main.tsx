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

              <meta name="description" content="Daniil Silin website" />
              <meta name="author" content="Daniil Silin" />
              <link rel="apple-touch-icon" href="icon.png" />
              <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />

              <meta property="og:site_name" content="Daniil Silin website" />
              <meta property="og:type" content="website" />

              <title>Daniil Silin</title>
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