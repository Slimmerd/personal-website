import React from 'react'
import {AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'
import "tailwindcss/tailwind.css";
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Layout from "../components/common/layout";

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    )
}

export default MyApp