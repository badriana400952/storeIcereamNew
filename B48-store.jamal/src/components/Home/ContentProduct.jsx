import { Card, Container, Flex, Heading, CardBody, Image, Stack, Text, Box, Button } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from "../../store/product/ProductSlice"
import { Link } from "react-router-dom"

const ContentProduct = () => {
    const { loading, product, error } = useSelector((state) => state.product)
    console.log(product)

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const Id = storedUser.id
    console.log(Id)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    const formatter = new Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'IDR',
    });
    if (loading) {
        return <>
            <Box>
                <Text textAlign={'center'} mt={10}>Loading</Text>
            </Box>
        </>
    }
    if (error) {
        return <>
            <Box>
                <Text textAlign={'center'} mt={10}>error</Text>
            </Box>
        </>
    }
    return (
        <>

            <Container maxW={'container.xl'} mt={9}>
                <Heading as='h4' size='lg' color={'#BD0707'}>Let’s Order <Button bg={`#BD0707`} color={`white`}><Link to={`/add/${Id}`}> Add Product</Link></Button>
                </Heading>
                <Flex justifyContent={"space-evenly"} flexWrap={"wrap"} gap={3} mt={8} >
                    {
                        // loading ? (
                        Array.isArray(product) && product.length > 0 ? (
                            product.map((item) => (
                                <Card width={'241px'} height={'392px'} flexShrink={0} key={item.id} background={'#F6DADA'} mt={5} >
                                    <Link to={`/${item.id}`}>
                                        <Box height={'312px'}  >
                                            <Image width={'100%'} height={'312px'} objectFit={'cover'}
                                                src={item.image}
                                                alt='Green double couch with wooden legs'
                                            />
                                        </Box>
                                    </Link>

                                    <CardBody >
                                        <Stack>
                                            <Text fontWeight={'bold'} color={'#BD0707'}>{item.name}</Text>
                                            <Text color={'#BD0707'} >
                                                {formatter.format(item.price)}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            ))
                        ) : (
                            // Jika product bukan array atau array kosong
                            // <p>Tidak ada produk yang tersedia.</p> 
                            null
                        )
                        // ) : (
                        //     // Jika loading adalah false
                        //     <p>Loading...</p>
                        // )
                    }
                </Flex>
            </Container>
        </>
    )
}

export default ContentProduct
