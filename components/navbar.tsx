import React, {HTMLAttributeAnchorTarget} from 'react'
import NextLink from "next/link"
import {HamburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from './utils/themeChangeButton'
import {
    Box,
    Container,
    Flex,
    Heading, IconButton,
    Link,
    Menu,
    MenuButton, MenuItem,
    MenuList,
    Stack,
    useColorModeValue
} from "@chakra-ui/react";
import {Url} from "url";

type NavBarItemT = {
    href: Url | String
    path: Url | String
    target?: HTMLAttributeAnchorTarget
}

type NavBarT = {
    path: Url
}

const NavBarItem: React.FC<NavBarItemT> = ({href, path, target, children, ...props}) => {
    const active = path === href
    const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900")

    return (
        <NextLink href={href as Url} passHref scroll={false}>
            <Link p={2}
                  bg={active ? 'glassTeal' : undefined}
                  color={active ? "blue.500" : inactiveColor}
                  target={target}
                  {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const NavBar: React.FC<NavBarT> = ({path, ...props}) => {
    return (
        <Box position={"fixed"} as={"nav"} w={"100%"} bg={useColorModeValue("#ffffff40", "#20202380")}
             style={{backdropFilter: "blur(10px)"}}
             zIndex={1}
             {...props}
        >
            <Container
                display={"flex"}
                p={2}
                maxW={"container.md"}
                alignContent={"center"}
                justifyContent={"space-between"}
            >
                <Flex align={"center"} mr={5}>
                    <NextLink href={"/"} scroll={false} passHref>
                        <a>
                            <Heading as={"h1"} size={"lg"} letterSpacing={"tighter"}>NRK</Heading>
                        </a>
                    </NextLink>
                </Flex>

                <Stack
                    direction={{base: "column", md: "row"}}
                    display={{base: "none", md: "flex"}}
                    width={{base: "full", md: "auto"}}
                    alignItems={"center"}
                    flexGrow={1}
                    mt={{base: 4, md: 0}}
                >
                    <NavBarItem href="/portfolio" path={path}>
                        Portfolio
                    </NavBarItem>
                    <NavBarItem href="/special" path={path}>
                        Special
                    </NavBarItem>
                </Stack>

                <Box flex={1} textAlign={"right"}>
                    <ThemeToggleButton/>

                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon/>}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/portfolio" passHref>
                                    <MenuItem as={Link}>Portfolio</MenuItem>
                                </NextLink>
                                <NextLink href="/special" passHref>
                                    <MenuItem as={Link}>Special</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>

            </Container>
        </Box>
    );
};

export default NavBar;