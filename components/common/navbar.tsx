import React, {useRef, useState} from 'react'
import Link from 'next/link'
// import {useRouter} from 'next/router'
import useWindowSize from '../../utils/hooks/UseWindowSize'
import styled from "styled-components";

const NavContainer = styled.div`
  nav ul li a:before,
  nav ul li a:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    margin: 5px 0 0;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    background-color: #C65F63;
  }

  nav ul li a.active:before,
  nav ul li a.active:after,
  nav ul li:hover a:before,
  nav ul li:hover a:after {
    width: 100%;
    opacity: 1;
  }
`

const NavBar = () => {
    const navigationMobileRef = useRef<HTMLUListElement>(null)
    const mobileIconRef = useRef<HTMLDivElement>(null)
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    // const router = useRouter()
    const {width} = useWindowSize()

    const toggleMobileNavigation = () => {
        navigationMobileRef.current?.classList.add('touched')
        navigationMobileRef.current?.classList.toggle('translate-x-full')
        setMobileNavOpen(!mobileNavOpen)
    }

    const linkClicked = (event: { currentTarget: { href: string | string[] } }) => {
        if (event.currentTarget.href.indexOf('cv') > -1) {
            document.querySelectorAll('nav li a').forEach(navEl => {
                navEl.classList.remove('active')
            })
        }
        if (width! <= 768) {
            toggleMobileNavigation()
        }
    }

    const renderNavigationItems = () => {
        return (
            <>
                <li className="md:mr-6">
                    <Link href={{pathname: '/', hash: 'main'}}>
                        <a className="relative" onClick={linkClicked}>
                            Main
                        </a>
                    </Link>
                </li>
                <li className="mt-2 md:mt-0 md:mr-6">
                    <Link href={{pathname: '/', hash: 'projects'}}>
                        <a className="relative" onClick={linkClicked}>
                            Projects
                        </a>
                    </Link>
                </li>
                <li className="mt-2 md:mt-0 md:mr-6">
                    <Link href={{pathname: '/', hash: 'links'}}>
                        <a className="relative" onClick={linkClicked}>
                            Links
                        </a>
                    </Link>
                </li>
                {/*<li className="mt-2 md:mt-0">*/}
                {/*    <Link href="/cv">*/}
                {/*        <a*/}
                {/*            onClick={linkClicked}*/}
                {/*            className={`relative ${*/}
                {/*                router.pathname === '/cv' ? 'active' : ''*/}
                {/*            }`}*/}
                {/*        >*/}
                {/*            CV*/}
                {/*        </a>*/}
                {/*    </Link>*/}
                {/*</li>*/}
            </>
        )
    }

    return (
        <NavContainer>
            <nav className="fixed bg-gray-700 h-16 w-full z-50">
                <div className="flex h-full container mx-auto justify-between items-center px-4 md:px-0">
                    <Link href={{pathname: '/'}}>
                        <a className="logo flex flex-row text-2xl">
                            <div className="letter inline-block top-0 relative">nrkkk</div>
                        </a>
                    </Link>
                    <ul className="hidden md:flex">{renderNavigationItems()}</ul>
                    <ul
                        ref={navigationMobileRef}
                        className="md:hidden absolute flex flex-col w-full top-16 left-0 py-3 items-center bg-default-blue transform translate-x-full"
                    >
                        {renderNavigationItems()}
                    </ul>
                    <div
                        ref={mobileIconRef}
                        onClick={toggleMobileNavigation}
                        className="md:hidden order-3 h-6 w-5 cursor-pointer relative"
                    >
          <span
              className={`transform transition duration-300 ease-in-out absolute h-1 w-full bg-white rounded-lg left-0 ${
                  mobileNavOpen ? 'rotate-45 top-2' : 'rotate-0'
              }`}
          />
                        <span
                            className={`absolute transition duration-300 ease-in-out h-1 w-full bg-white rounded-lg left-0 top-2 ${
                                mobileNavOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                        />
                        <span
                            className={`transform transition duration-300 ease-in-out absolute h-1 w-full bg-white rounded-lg left-0 ${
                                mobileNavOpen ? '-rotate-45 top-2' : 'rotate-0 top-4'
                            }`}
                        />
                    </div>
                </div>
            </nav>
        </NavContainer>
    )
}

export default NavBar