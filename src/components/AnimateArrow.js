import './AnimateArrow.css'
import { useColorMode, Box, Icon, useMediaQuery } from '@chakra-ui/react'
import { VscFoldDown } from 'react-icons/vsc'

const AnimateArrow = () => {
    const { colorMode } = useColorMode()
    const isDark = colorMode === "dark"
    const [isNotSmallerScreen] = useMediaQuery("(min-width:920px)");
    return (
        <Box
            className='arrow'
            alignItems="center">
            <Icon
                mt={isNotSmallerScreen ? "10" : "20"}
                className='arrows'
                as={VscFoldDown}
                w={isNotSmallerScreen ? "75px" : "60px"}
                h={isNotSmallerScreen ? "75px" : "60px"}
                color={isDark ? 'teal.300' : "green.300"}></Icon>
        </Box>
    );
}

export default AnimateArrow;