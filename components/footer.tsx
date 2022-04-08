import React from 'react'
import { Box, Kbd } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box textAlign="center" opacity={0.4} fontSize="sm">
            Made with  <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> & <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd> and magic  &copy; {new Date().getFullYear()} Daniil Silin
        </Box>
    )
}

export default Footer