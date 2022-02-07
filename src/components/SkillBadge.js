import { Text, Stack, Heading, Image, useMediaQuery, SimpleGrid, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import html5 from '../images/html-5.png'
import css3 from '../images/css-3.png'
import bs from '../images/bootstrap.png'
import figma from '../images/figma.png'
import xd from '../images/xd.png'
import java from '../images/java.png'
import js from '../images/js.png'
import python from '../images/python.png'
import illu from '../images/illu.svg'

const SkillBadge = () => {

    // aos usage
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    const [isNotSmallerScreen] = useMediaQuery("(min-width:920px)");

    return (
        <Stack pt={isNotSmallerScreen ? "9.5vh" : "7vh"} id="about" >
            {/* About Me Here */}
            <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                <Box
                    data-aos-duration="2000"
                    data-aos="fade-down"
                    pl={isNotSmallerScreen ? "10vw" : "5vw"}>
                    <Heading
                        alignSelf="center"
                        pt={isNotSmallerScreen ? "5vh" : "1vh"}
                        fontSize={isNotSmallerScreen ? "5xl" : "4xl"}>
                        About me
                    </Heading>
                    <Text
                        fontWeight="semibold"
                        lineHeight="40px"
                        pt={isNotSmallerScreen ? "5vh" : "1vh"}
                        alignSelf="center"
                        fontSize={isNotSmallerScreen ? "xl" : "lg"}>
                        I'm Yangon-based Web developer and UI/UX designer. Freshly graduate, passionate and finding opportunities to start a carrer in challenging developement environment. Feel Free to contact me for freelance projects. 🙋🏻‍♂️
                    </Text>
                </Box>
                <Box
                    data-aos-duration="2000"
                    data-aos="fade-up"
                    pl={isNotSmallerScreen ? "10vw" : "19vw"}>
                    <Image
                        boxSize={isNotSmallerScreen ? "400px" : "250px"}
                        src={illu}></Image>
                </Box>
            </SimpleGrid>

            {/* Skill Badge here */}
            <Box
                data-aos-duration="2000"
                data-aos="fade-down"
                alignSelf="center">
                <Heading
                    alignSelf="center"
                    pl={isNotSmallerScreen ? "0" : "0"}
                    pt={isNotSmallerScreen ? "10vh" : "1vh"}
                    fontSize={isNotSmallerScreen ? "5xl" : "4xl"}>
                    What I can do.
                </Heading>
                <Text
                    alignSelf="center"
                    pl={isNotSmallerScreen ? "4vh" : "1vh"}
                    mt={2}
                    fontSize={isNotSmallerScreen ? "xl" : "lg"}>
                    Efficiently expereniced with :
                </Text>
            </Box>
            <SimpleGrid
                alignSelf="center"
                data-aos-duration="1000"
                data-aos="fade-up"
                pt={isNotSmallerScreen ? "10vh" : "2vh"}
                columns={[2, null, 4]}
                spacing={isNotSmallerScreen ? "100px" : "80px"}>
                <Box>
                    <Box alignContent="center">
                        <Image
                            boxSize={isNotSmallerScreen ? "130px" : "100px"}
                            src={html5}>
                        </Image>
                    </Box>
                    <Box alignContent="center">
                        <Text
                            pt={3}
                            fontWeight="semibold"
                            fontSize={isNotSmallerScreen ? "xl" : "lg"}
                            textAlign="center">
                            HTML5</Text>
                    </Box>
                </Box>
                <Box>
                    <Image
                        boxSize={isNotSmallerScreen ? "130px" : "100px"}
                        src={css3}></Image>
                    <Text
                        pt={3}
                        fontWeight="semibold"
                        fontSize={isNotSmallerScreen ? "xl" : "lg"}
                        textAlign="center">
                        CSS3</Text>
                </Box>
                <Box>
                    <Image
                        boxSize={isNotSmallerScreen ? "130px" : "100px"}
                        src={bs}></Image>
                    <Text
                        pt={3}
                        fontWeight="semibold"
                        fontSize={isNotSmallerScreen ? "xl" : "lg"}
                        textAlign="center">
                        Bootstrap</Text>
                </Box>
                <Box>
                    <Image
                        boxSize={isNotSmallerScreen ? "130px" : "100px"}
                        src={figma}></Image>
                    <Text
                        pt={3}
                        fontWeight="semibold"
                        fontSize={isNotSmallerScreen ? "xl" : "lg"}
                        textAlign="center">
                        Figma</Text>
                </Box>
                <Box>
                    <Image
                        boxSize={isNotSmallerScreen ? "130px" : "100px"}
                        src={xd}></Image>
                    <Text
                        pt={3}
                        fontWeight="semibold"
                        fontSize={isNotSmallerScreen ? "xl" : "lg"}
                        textAlign="center">
                        AdobeXD</Text>
                </Box>
                <Box>
                    <Image
                        boxSize={isNotSmallerScreen ? "130px" : "100px"}
                        src={java}></Image>
                    <Text
                        pt={3}
                        fontWeight="semibold"
                        fontSize={isNotSmallerScreen ? "xl" : "lg"}
                        textAlign="center">
                        Java</Text>
                </Box>
                <Box>
                    <Image
                        boxSize={isNotSmallerScreen ? "130px" : "100px"}
                        src={js}></Image>
                    <Text
                        pt={3}
                        fontWeight="semibold"
                        fontSize={isNotSmallerScreen ? "xl" : "lg"}
                        textAlign="center">
                        JavaScript</Text>
                </Box>
                <Box>
                    <Image
                        boxSize={isNotSmallerScreen ? "130px" : "100px"}
                        src={python}></Image>
                    <Text
                        pt={3}
                        fontWeight="semibold"
                        fontSize={isNotSmallerScreen ? "xl" : "lg"}
                        textAlign="center">
                        Python</Text>
                </Box>
            </SimpleGrid>
        </Stack>
    );
}

export default SkillBadge;