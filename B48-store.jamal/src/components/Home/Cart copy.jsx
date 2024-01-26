import { Box, Button, Container, Divider, Flex, FormControl, Heading, Image, Input, Text, Textarea } from "@chakra-ui/react"
import invoice from '../../assets/invoice.png'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {   getCheckoutID } from "../../store/product/CheckOutSlice";
const Cart = () => {
    const dispatch = useDispatch()
    const {checkout} = useSelector((state) => state.checkout)
    const {id} = useParams()
    

    console.log(checkout)
    useEffect(() => {
        dispatch(getCheckoutID(id))
    }, [dispatch,id])

    const [recipients, setRecipients] = useState('');
    const [subjects, setSubjects] = useState('');
    const [bodys, setBodys] = useState('');
    const [phones, setPhones] = useState('');
    const [codePosts, setCodePosts] = useState('');

    const sendEmail = () => {
        const recipient = recipients;
        const subject = subjects;
        const baseBody = bodys;
        const phone = phones;
        const code = codePosts;
        const additionalProduct = `Nama Product: ${checkout.name}\nJumlah Toping: ${checkout.toping.length}\nTotal Harga: ${checkout.total}\n\n`;

         const additionalText = `Nama : ${subject}\nNomor Telepon: ${phone}\nKode Pos: ${code}\n\n`;
         const body = additionalText + additionalProduct + baseBody;

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        console.log(mailtoLink)
        window.location.href = mailtoLink;
    }

    return (
        <>
            <Container maxW={'container.xl'} mt={9}>
                <Flex justifyContent={"space-evenly"} flexWrap={"wrap"} gap={7}>
                    <Box flex={2} >
                        <Heading as='h4' size='sm' color={'#BD0707'}>
                            My Cart
                        </Heading>
                        <Box color={'#BD0707'} mt={5}>
                            <Text mb={5}>Review Your Order</Text>
                            <Divider />
                            <Flex justifyContent={'space-between'} gap={3} alignItems={'center'} mt={5}>
                                <Flex justifyContent={'start'} width={'100%'}>
                                    <Box flex={0.5}>
                                        <Image src={checkout.image} borderRadius={'20px'}
                                            width={"100px"} objectFit={'cover'} />
                                    </Box>
                                    <Box flex={2.5} ml={5} width={'100%'} lineHeight={"40px"}>
                                        <Text>{checkout.name}</Text>
                                        { Array.isArray(checkout.toping) &&
                                        checkout.toping.map((item) => (
                                            <Text key={item.id}>
                                                <Text>Toping : {item.name}</Text>
                                            </Text>
                                        ))}
                                    </Box>
                                </Flex>
                                <Box>
                                    <Text>{checkout.price}</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Divider my={9} />
                        <Flex p={5} color={'#BD0707'}>
                            <Box flex={2}>
                                <Box width={'450px'} lineHeight={'60px'}>
                                    <Divider />

                                    <Flex justifyContent={'space-between'} flex={1.5}>
                                        <Text>Subtotal</Text>
                                        <Text>Rp {checkout.total}</Text>
                                    </Flex>
                                    <Flex justifyContent={'space-between'} >
                                        <Text>Qty</Text>
                                        <Text>1</Text>
                                    </Flex>
                                    <Divider />
                                    <Flex justifyContent={'space-between'} >
                                        <Text fontWeight={'bold'}>Total</Text>
                                        <Text fontWeight={'bold'}>Rp {checkout.total}</Text>
                                    </Flex>
                                </Box>
                            </Box>
                            
                            <Flex flex={1} justifyContent={'center'} alignItems={'center'} gap={5} border={'3px solid #BD0707'} bg={"#F6DADA"}>
                                <Box  >
                                    <Image src={invoice} width={'70px'} objectFit={'cover'} />
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box flex={1}  mt={"80px"}>
                        <form onSubmit={sendEmail}>
                        <Flex flexDirection={'column'} gap={5} p={3}>
                            <FormControl isRequired>
                                <Input placeholder='Name' onChange={(e) => setSubjects(e.target.value)}  border={'3px solid #BD0707'}name="name" padding={5}/>
                            </FormControl>

                            <FormControl isRequired>
                                <Input placeholder='Email' onChange={(e) => setRecipients(e.target.value)} name="email" border={'3px solid #BD0707'} padding={5}/>
                            </FormControl>

                            <FormControl isRequired>
                                <Input placeholder='Phone' name="phone" onChange={(e) => setPhones(e.target.value)} border={'3px solid #BD0707'} padding={5}/>
                            </FormControl>

                            <FormControl isRequired>
                                <Input placeholder='Code Post' border={'3px solid #BD0707'} padding={5} onChange={(e) => setCodePosts(e.target.value)} name="codePosts"/>
                            </FormControl>
                            <FormControl isRequired>
                            <Textarea isInvalid placeholder='Addres' onChange={(e) => setBodys(e.target.value)} name="bodys" border={'3px solid #BD0707'} />

                            </FormControl>

                            <Button colorScheme='red' size='md' type="submit">
                                Submit
                            </Button>
                        </Flex>
                        </form>
                    </Box>
                </Flex>
            </Container>
        </>
    )
}

export default Cart
