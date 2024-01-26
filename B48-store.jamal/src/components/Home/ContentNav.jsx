import { Card, Container, Flex  , CardBody, Image, Stack, Text, Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductNav } from "../../store/product/ProductSlice"

const ContentNav = () => {
    const { loading, product, error } = useSelector((state) => state.product)
    console.log("ini getProductNav",product)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductNav())
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
                <Flex justifyContent={"space-evenly"} flexWrap={"wrap"} gap={3} mt={8} >
                    {
                        // loading ? (
                        Array.isArray(product) && product.length > 0 ? (
                            product.map((item) => (
                                <Card width={'241px'} height={'392px'} flexShrink={0} key={item.id} background={'#F6DADA'} mt={5} >
                                    
                                        <Box height={'312px'}  >
                                            <Image width={'100%'} height={'312px'} objectFit={'cover'}
                                                src={item.image}
                                                alt='Green double couch with wooden legs'
                                            />
                                        </Box>

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

export default ContentNav
