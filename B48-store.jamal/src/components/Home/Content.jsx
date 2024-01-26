import { Box, Container, Flex, Image,  } from "@chakra-ui/react"
import jumbotron from '../../assets/jumbotron.png'
const Content = () => {
    return (
        <>
            <Container maxW={'container.xl'} mt={9}  >
                    <Flex justifyContent={"center"} alignItems={"center"} position={"relative"} >
                        {/* <Box width={'400px'} margin={"60px"} >
                            <Heading as={'h1'} color={'white'}>WAYSBUCKS</Heading>
                            <Text color={'white'} mt={5}>Things are changing, but we’re still here for you
                            </Text>
                            <Text color={'white'} mt={5}>
                            We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. Waysbucks Drivers is also available
                            </Text>
                            <Text mt={5} color={'white'}>Let`s Order...</Text>
                        </Box>
                        <Box position={"absolute"} right={"-100px"} top={10}>
                            <Image src={contentImage} />
                        </Box> */}
                        <Box width={"100%"}  display={"flex"}justifyContent={"center"}>
                            <Image src={jumbotron} width={"100%"}/>
                        </Box>
                    </Flex>
            </Container>
        </>
    )
}

export default Content
