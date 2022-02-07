import {
    Image,
    Button,
    Text,
    Flex,
    Stack,
    Box,
    useMediaQuery,
    Circle,
    useColorMode,
    Icon
} from "@chakra-ui/react";
import { useEffect } from "react"
import { FaChevronCircleRight, FaFigma } from 'react-icons/fa'
import { SiAdobexd } from "react-icons/si";
import { motion } from 'framer-motion'
import Aos from "aos";
import "aos/dist/aos.css"
import profile from "../images/profile.jpeg"

const Intro = () => {

    // aos usage
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    const { colorMode } = useColorMode()
    const isDark = colorMode === "dark"
    const [isNotSmallerScreen] = useMediaQuery("(min-width:920px)");
    return (
        <Stack
            pt={isNotSmallerScreen ? "15vh" : "11vh"}>
            <Circle
                mt={isNotSmallerScreen ? "10" : "300"}
                ml={isNotSmallerScreen ? "10" : 0}
                position="absolute"
                bg="green.500"
                opacity="0.1"
                w={isNotSmallerScreen ? "300px" : "200px"}
                h={isNotSmallerScreen ? "300px" : "200px"}
                alignSelf="flex-start" />
            <Flex
                direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px"
                p={isNotSmallerScreen ? "32" : "0"}>
                <Image
                    data-aos-duration="2000"
                    data-aos="fade-down"
                    zIndex={1}
                    alignSelf="center"
                    mt={isNotSmallerScreen ? "0" : "0"}
                    mb={isNotSmallerScreen ? "0" : "12"}
                    ml={isNotSmallerScreen ? "0" : "5%"}
                    borderRadius='full'
                    backgroundColor="transparent"
                    boxShadow="lg"
                    boxSize={isNotSmallerScreen ? "300px" : "200px"}
                    src={profile} />
                <Box
                    mt={isNotSmallerScreen ? "0" : 1}
                    pl={isNotSmallerScreen ? "20" : 0}
                    alignSelf="flex-end">
                    <Box w="full" h="2px" bg={isDark ? 'white' : "black"}> </Box>
                    <Text
                        fontSize={isNotSmallerScreen ? "5xl" : "3xl"}
                        fontWeight="semibold">
                        Hi, I am
                    </Text>
                    <Text
                        data-aos-duration="2000"
                        data-aos="fade-up"
                        fontSize={isNotSmallerScreen ? "7xl" : "5xl"}
                        fontWeight="bold"
                        bgGradient="linear(to-r, green.400, teal.500, teal.600)" bgClip='text'>
                        Hein Set Swe.
                    </Text>
                    <Text
                        lineHeight="40px"
                        fontSize={isNotSmallerScreen ? "xl" : "lg"}
                        color={isDark ? "gray.100" : "gray.700"}>
                        I'm web developer who also love to create UI/UX design w/ Figma <Icon ml={1} as={FaFigma} /> and AdobeXD <Icon ml={1} as={SiAdobexd} /> .
                    </Text>
                    <motion.div
                        style={{ "width": 20 }}
                        whileTap={{ scale: 0.85 }}>
                        <Button
                            size="lg"
                            variant="outline"
                            mt={5}
                            colorScheme='green'
                            onClick={() => window.open("https://resume.io/r/m1Y5P9q9z")}
                        >

                            Resume <Icon ml={2} as={FaChevronCircleRight} />
                        </Button>
                    </motion.div>
                    <Box mt={5} w="full" h="2px" bg={isDark ? 'white' : "black"}> </Box>
                </Box>
            </Flex>
        </Stack>
    );
}

export default Intro;