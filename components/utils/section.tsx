import React from 'react'
import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

type SectionT = {
    delay?: number
}

const Section: React.FC<SectionT> = ({ children, delay = 0 }) => (
    <StyledDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // @ts-ignore
        transition={{ duration: 0.8, delay }}
        mb={6}
    >
        {children}
    </StyledDiv>
)

export default Section