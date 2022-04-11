import type {AppProps} from 'next/app'
import Layout from "../components/layouts/main"
import ChakraCookie from "../components/themeCookie";
import {AnimatePresence} from "framer-motion";

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

function MyApp({Component, pageProps, router}: AppProps) {
    return (
        <ChakraCookie cookies={pageProps.cookies}>
            <Layout router={router}>
                <AnimatePresence
                    exitBeforeEnter
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0 })
                        }
                    }}
                >
                <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraCookie>
    )
}

export default MyApp