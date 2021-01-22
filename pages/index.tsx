import React, {useEffect, useRef} from 'react'
import HelloWorld from "../components/hello";
import AboutMe from "../components/aboutme";
import InfoBlocks from '../components/infoBlocks';
import styled from 'styled-components';

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
    const aboutmeRef = useRef(null)
    const projectsRef = useRef(null)
    const linksRef = useRef(null)

    useEffect(() => {
        smoothscroll.polyfill()
    })

    useEffect(() => {
        let observer: IntersectionObserver
        if (
            aboutmeRef.current &&
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
            observer.observe(aboutmeRef.current)
            observer.observe(projectsRef.current)
            observer.observe(linksRef.current)
        }
        return () => observer.disconnect()
    }, [aboutmeRef, projectsRef, linksRef])

    return (
        <>
            <HelloWorld/>
            <GlobalContainer className={'container mx-auto'}>
                <section id={'aboutme'} ref={aboutmeRef}>
                    <AboutMe/>
                </section>

                <InfoBlocks linksRef={linksRef} projectsRef={projectsRef}/>
            </GlobalContainer>
        </>
    )
}

export default IndexPage
