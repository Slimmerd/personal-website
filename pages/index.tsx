import React, {useEffect, useRef} from 'react'
import HelloWorld from "../components/hello";
import InfoBlocks from '../components/infoBlocks';
import styled from 'styled-components';
import Head from 'next/head'

import smoothscroll from 'smoothscroll-polyfill'

const GlobalContainer = styled.div`
  cursor: default;
  margin: 0 auto;

  section::before {
    display: block;
    content: "";
    height: 80px;
    margin: -80px 0 0;
  }
`

const IndexPage = () => {
    const main = useRef<HTMLElement>(null)
    const projectsRef = useRef<HTMLElement>(null)
    const linksRef = useRef<HTMLElement>(null)

    useEffect(() => {
        smoothscroll.polyfill()
    })

    useEffect(() => {
        let observer: IntersectionObserver
        if (
            main.current &&
            projectsRef.current &&
            linksRef.current
        ) {
            const options = {
                threshold: 0.8,
            }
            observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const navElement = document.querySelector(
                        `a[href="/#${entry.target.id}"]`,
                    )
                    if (entry.isIntersecting) {
                        if (!navElement?.classList.contains('active')) {
                            navElement?.classList.add('active')
                        }
                    } else if (navElement?.classList.contains('active')) {
                        navElement.classList.remove('active')
                    }
                })
            }, options)
            observer.observe(main.current)
            observer.observe(projectsRef.current)
            observer.observe(linksRef.current)
        }
        return () => observer.disconnect()
    }, [main, projectsRef, linksRef])

    return (
        <>
            <Head>
                <title>Daniil Silin website</title>
                <meta property="og:title" content="Daniil Silin website" key="title"/>
                <meta property="og:description" content="Daniil Silin's personal website"/>
                <meta property="og:locale" content="en_GB"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <HelloWorld/>
            <GlobalContainer className={'container mx-auto'}>
            </GlobalContainer>
            <InfoBlocks linksRef={linksRef} projectsRef={projectsRef} main={main}/>
        </>
    )
}

export default IndexPage
