import {
    VStack,
    useMediaQuery,
    Divider,
    Flex,
    Heading,
    Spacer,
    IconButton,
    useColorMode,
    Button,
} from "@chakra-ui/react";
import {
    FaSun,
    FaMoon
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'
import "./Navbar.css"

import Aos from "aos";
import "aos/dist/aos.css"

const Navbar = () => {
    // aos usage
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);


    // color mode function
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"
    const [isNotSmallerScreen] = useMediaQuery("(min-width:920px)");
    const [display, changeDisplay] = useState('none');

    return (
        <Flex
            w="full"
            className="navbar"
            bg={isDark ? "#1A202C" : "#FFFFFF"}>
            <Heading
                data-aos-duration="1000"
                data-aos="fade-up"
                mt={isNotSmallerScreen ? "0" : "2.5"}
                size={isNotSmallerScreen ? "md" : "sm"}
                fontWeight="semibold"
                color='green.400'>
                hein-set-swe.
            </Heading>
            <Spacer />

            {/* Mobile Navigation Here */}
            <VStack
                className="mobile"
                display={display}
                w="100vw"
                h="100vh"
                bg={isDark ? "#1A202C" : "#FFFFFF"}
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto">
                <Flex
                    pt="0.5vh"
                    pr="15vw"
                    alignSelf="flex-end">
                    <IconButton
                        onClick={() => changeDisplay('none')}
                        mt={4}
                        icon={<CloseIcon />} />
                </Flex>
                <Flex
                    pt="10vh"
                    // alignItem="center"
                    flexDir="column">

                    <motion.div
                        whileTap={{ scale: 0.9 }}>
                        <a href="#home">
                            <Button
                                w="100px"
                                h="50px"
                                onClick={() => changeDisplay('none')}
                                size="lg"
                                href="contact"
                                colorScheme='green'
                                variant='outline'>
                                Home
                            </Button>
                        </a>
                    </motion.div>

                    <Divider mt={5} mb={5} />

                    <motion.div
                        whileTap={{ scale: 0.9 }}>
                        <a href="#about">
                            <Button
                                w="100px"
                                h="50px"
                                onClick={() => changeDisplay('none')}
                                size="lg"
                                colorScheme='green'
                                variant='outline'>
                                About
                            </Button>
                        </a>
                    </motion.div>

                    <Divider mt={5} mb={5} />

                    <motion.div
                        whileTap={{ scale: 0.9 }}>
                        <a href="#contact">
                            <Button
                                w="100px"
                                h="50px"
                                onClick={() => changeDisplay('none')}
                                size="lg"
                                href="contact"
                                colorScheme='green'
                                variant='outline'>
                                Contact
                            </Button>
                        </a>
                    </motion.div>
                </Flex>
            </VStack>
            <Spacer />

            {/* Desktop Navigation Here */}
            <Flex
                display={isNotSmallerScreen ? "true" : "none"}>
                <motion.button
                    whileTap={{ scale: 0.8 }}>
                    <a href="#home">
                        <Button mr={3} colorScheme='green' variant='ghost'>
                            Home
                        </Button>
                    </a>
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.8 }}>
                    <a href="#about">
                        <Button mr={3} colorScheme='green' variant='ghost'>
                            About Me
                        </Button>
                    </a>
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.8 }}>
                    <a href="#contact">
                        <Button mr={3} href="contact" colorScheme='green' variant='ghost'>
                            Contact
                        </Button>
                    </a>
                </motion.button>
            </Flex>
            <motion.div
                style={{ "width": "10px", "marginRight": "60px" }}
                whileTap={{ scale: 0.9 }}>
                <IconButton
                    ml={3}
                    icon={isDark ? <FaSun /> : <FaMoon />}
                    onClick={toggleColorMode}
                ></IconButton>
            </motion.div>
            <motion.div
                whileTap={{ scale: 0.9 }}>
                <IconButton
                    onClick={() => changeDisplay('flex')}
                    display={isNotSmallerScreen ? "none" : "true"}
                    icon={<HamburgerIcon />}>
                </IconButton>
            </motion.div>
        </Flex>
    );
}

export default Navbar;