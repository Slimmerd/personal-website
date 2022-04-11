import React from 'react'
import {ChakraProvider, cookieStorageManager, localStorageManager} from '@chakra-ui/react'
import {GetServerSideProps, NextPage} from "next";

type ChakraCookie = {
    cookies: any
}

const ChakraCookie: NextPage<ChakraCookie> = ({cookies, children}) => {
    const colorModeManager =
        typeof cookies === 'string'
            ? cookieStorageManager(cookies)
            : localStorageManager

    return (
        <ChakraProvider colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
    return {
        props: {
            cookies: req.headers.cookie ?? ''
        }
    }
}

export default ChakraCookie