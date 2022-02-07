import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import { motion } from "framer-motion"
import {
    Heading,
    Stack,
    SimpleGrid,
    Box,
    Image,
    Text,
    useMediaQuery,
    useColorMode,
    Icon,
    IconButton,
    Flex,
    Button
} from "@chakra-ui/react";
import {
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaBehance,
    FaPhoneSquareAlt,
    FaRegEnvelope,
} from 'react-icons/fa'
import contact from "../images/contact.svg"

const Contact = () => {

    // aos usage
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    const [isNotSmallerScreen] = useMediaQuery("(min-width:920px)");

    return (
        <Stack
            id="contact"
            pt={isNotSmallerScreen ? "10vh" : "12vh"}>
            <Heading
                data-aos-duration="2000"
                data-aos="fade-down"
                alignSelf="center"
                ontSize={isNotSmallerScreen ? "5xl" : "4xl"}>
                Contact Me
            </Heading>
            <SimpleGrid
                columns={[1, null, 2]}
                pt="5vh"
                spacing='20px'>

                {/* Image section */}
                <Box
                    pl={isNotSmallerScreen ? "0" : "5vh"}
                    data-aos-duration="2000"
                    data-aos="fade-right">
                    <Image
                        boxSize={isNotSmallerScreen ? "400px" : "250px"}
                        src={contact}></Image>
                </Box>

                {/* Contact Section */}
                <Flex pt={isNotSmallerScreen ? "5vh" : "2vh"} flexDir="column">
                    <Box
                        data-aos-duration="2000"
                        data-aos="fade-up">
                        <Text
                            lineHeight="40px"
                            fontWeight="semibold"
                            fontSize={isNotSmallerScreen ? "xl" : "lg"}>
                            Feel free to contact and say "Hi" via social medias or  mobile-phone.
                        </Text>
                    </Box>

                    <Box
                        pt={8}
                        alignSelf="center"
                        // pl={isNotSmallerScreen ? "19.4vh" : "9.4vh"}
                        data-aos-duration="2000"
                        data-aos="fade-up">
                        <Flex
                            alignText="center"
                            lineHeight="40px"
                            fontSize={isNotSmallerScreen ? "xl" : "lg"}>
                            <Icon mt="7.3px" w={8} h={8} as={FaPhoneSquareAlt} />
                            <Text fontWeight="semibold">[+959761365432]</Text>
                        </Flex>
                    </Box>

                    <Box
                        pt={9}
                        alignSelf="center">
                        <motion.button
                            whileTap={{ scale: 0.85 }}>
                            <Button
                                variant="outline"
                                colorScheme='green'
                                size='lg'
                                onClick={() => window.open("mailto:zayne.27.click@gmail.com")}>
                                Send Mail <Icon ml={2} as={FaRegEnvelope} />
                            </Button>
                        </motion.button>
                    </Box>

                    <Box
                        pt={9}
                        alignSelf="center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.85 }}>
                            <IconButton
                                colorScheme='green'
                                aria-label='Call Segun'
                                size='md'
                                isRound="true"
                                icon={<FaFacebook />}
                                onClick={() => window.open("https://www.facebook.com/profile.php?id=100009267762453")}
                            />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.85 }}>
                            <IconButton
                                ml={2}
                                colorScheme='green'
                                aria-label='Call Segun'
                                size='md'
                                isRound="true"
                                icon={<FaInstagram />}
                                onClick={() => window.open("https://www.instagram.com/zayne.htos_/")}
                            />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.85 }}>
                            <IconButton
                                ml={2}
                                colorScheme='green'
                                aria-label='Call Segun'
                                size='md'
                                isRound="true"
                                icon={<FaLinkedin />}
                                onClick={() => window.open("https://www.linkedin.com/in/hein-set-swe-346a8a22b")}
                            />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.85 }}>
                            <IconButton
                                ml={2}
                                colorScheme='green'
                                aria-label='Call Segun'
                                size='md'
                                isRound="true"
                                icon={<FaBehance />}
                                onClick={() => window.open("https://www.behance.net/heinsetswe")}
                            />
                        </motion.button>
                    </Box>

                </Flex>
            </SimpleGrid>
        </Stack>
    );
}

export default Contact;