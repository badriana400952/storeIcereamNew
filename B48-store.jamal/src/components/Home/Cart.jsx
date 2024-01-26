import { Box, Button, Container, Divider, Flex, FormControl, Heading, Image, Input, Text, Textarea } from "@chakra-ui/react"
import invoice from '../../assets/invoice.png'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCheckout } from "../../store/product/CheckOutSlice";
import { BsTrash3 } from "react-icons/bs";
import axios from "axios";
const Cart = () => {
    const dispatch = useDispatch()
    const { checkout } = useSelector((state) => state.checkout)

    console.log("checkout", checkout)
    useEffect(() => {
        dispatch(getCheckout())
    }, [dispatch])



    const totalToping = Array.isArray(checkout) ? checkout.map((item) => item.totalAmount) : [];

    const jumlah = totalToping.reduce((a, b) => a + b, 0);
    const jumlahOngkir = totalToping.reduce((a, b) => a + b, 0);
    const Subtotal = jumlahOngkir + 20000 // Menambahkan ongkos kirim sebesar 20




    const [recipients, setRecipients] = useState('');
    const [subjects, setSubjects] = useState('');
    const [bodys, setBodys] = useState('');
    const [phones, setPhones] = useState('');
    const [codePosts, setCodePosts] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const recipient = recipients;
        const subject = subjects;
        const baseBody = bodys;
        const phone = phones;
        const code = codePosts;
        const additionalProduct = `Nama Product: ${checkout.name}\nTotal Harga: ${checkout.total}\n\n`;

        const additionalText = `Nama : ${subject}\nNomor Telepon: ${phone}\nKode Pos: ${code}\n\n`;
        const body = additionalText + additionalProduct + baseBody;

        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        console.log(mailtoLink)
        window.location.href = mailtoLink;
    }



    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/checkoute/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                }
            });
            dispatch(getCheckout())
        } catch (error) {
            console.log(error);
        }
    };

   
    const formatter = new Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'IDR',
    });


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
                            {Array.isArray(checkout)
                                ? checkout.map((items) => (


                                    <Flex key={items.id} justifyContent={'space-between'} gap={3} alignItems={'center'} mt={5}>
                                        <Flex justifyContent={'start'} width={'100%'}>

                                            <Box flex={0.5}>
                                                <Image src={items.product.image} borderRadius={'20px'}
                                                    width={"100px"} objectFit={'cover'} />
                                            </Box>
                                            <Box flex={2.5} ml={5} width={'100%'} lineHeight={"40px"} >
                                                <Text>{items.product.name}</Text>
                                                {items.product.topings.map((toping) => (
                                                    <Box key={toping.id} >
                                                        <Text>Toping: {toping.name}</Text>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Flex>
                                        <Box   lineHeight={'100%'} height={'100px'} display={"flex"} justifyContent={'space-between'} flexDirection={"column"}>
                                            <Text >{items.totalAmount}</Text>
                                            <Text textAlign={"right"} marginRight={"10px"} my={2}><BsTrash3 style={{ cursor: "pointer", textAlign: "right" }}
                                                onClick={() => handleDelete(items.id)}
                                            /></Text>
                                        </Box>
                                    </Flex>
                                ))
                                : null // Handle ketika checkout bukan array
                            }
                        </Box>
                        <Divider my={9} />
                        <Flex p={5} color={'#BD0707'}>
                            <Box flex={2}>
                                <Box width={'450px'} lineHeight={'60px'}>
                                    <Divider />

                                    <Flex justifyContent={'space-between'} flex={1.5}>
                                        <Text>Subtotal</Text>
                                        <Text> {formatter.format(jumlah)}</Text>
                                    </Flex>
                                    <Flex justifyContent={'space-between'} >
                                        <Text>Qty </Text>
                                        <Text>{checkout.length}</Text>
                                    </Flex>
                                    <Divider />
                                    <Flex justifyContent={'space-between'} >
                                        <Text fontWeight={'bold'}>Total</Text>
                                        <Text fontWeight={'bold'}> {formatter.format(Subtotal)} + Ongkir</Text>
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
                    <Box flex={1} mt={"80px"}>
                        <form onSubmit={sendEmail}>
                            <Flex flexDirection={'column'} gap={5} p={3}>
                                <FormControl isRequired>
                                    <Input placeholder='Name' onChange={(e) => setSubjects(e.target.value)} border={'3px solid #BD0707'} name="name" padding={5} />
                                </FormControl>

                                <FormControl isRequired>
                                    <Input placeholder='Email' onChange={(e) => setRecipients(e.target.value)} name="email" border={'3px solid #BD0707'} padding={5} />
                                </FormControl>

                                <FormControl isRequired>
                                    <Input placeholder='Phone' name="phone" onChange={(e) => setPhones(e.target.value)} border={'3px solid #BD0707'} padding={5} />
                                </FormControl>

                                <FormControl isRequired>
                                    <Input placeholder='Code Post' border={'3px solid #BD0707'} padding={5} onChange={(e) => setCodePosts(e.target.value)} name="codePosts" />
                                </FormControl>
                                <FormControl isRequired>
                                    <Textarea isInvalid placeholder='Addres' onChange={(e) => setBodys(e.target.value)} name="bodys" border={'3px solid #BD0707'} />

                                </FormControl>

                                <Button colorScheme='red' size='md' type="submit" >
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
