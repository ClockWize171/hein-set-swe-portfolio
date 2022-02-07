import { Flex, Text, useMediaQuery } from "@chakra-ui/react";

const Footer = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:920px)");

    return (
        <Flex
            p={isNotSmallerScreen ? 9 : 5}
            alignSelf="center">
            <Text
                lineHeight={2}
                fontSize={isNotSmallerScreen ? "sm" : "xs"}
                className="footer">
                Designed and Developed by <b>Hein Set Swe</b> and <b>Thet Min Htin</b>. <b>© 2022</b>
            </Text>
        </Flex>
    );
}

export default Footer;