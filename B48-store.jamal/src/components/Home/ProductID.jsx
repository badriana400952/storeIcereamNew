import { Box, Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getProductID } from "../../store/product/ProductSlice"
import { getToping } from "../../store/product/TopingSlice"
import { IoArrowBackCircle } from "react-icons/io5";
import { BsCheckCircleFill } from "react-icons/bs";
import { addCheckout } from "../../store/product/CheckOutSlice"
// import { checkUser } from "../../store/user/UserSlice"
const ProductID = () => {
    const { id } = useParams()
    const { product } = useSelector((state) => state.product)
    const dispatch = useDispatch()
    const storedUser = JSON.parse(localStorage.getItem("user"));


    const handleId = async (id) => {
        await dispatch(getProductID(id))
    }
    useEffect(() => {
        handleId(id)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        dispatch(getToping())
    }, [dispatch])


    const [selectedToppings, setSelectedToppings] = useState([]);
    const hargaminuman = product.price
    // const hargatoping = toping.map((i) => i.price)
    // console.log('hargaminuman', hargaminuman)
    // console.log('hargatoping', hargatoping)


    const toggleTopping = (topping) => {
        if (selectedToppings.includes(topping)) {
            setSelectedToppings(selectedToppings.filter(item => item !== topping));
        } else {
            setSelectedToppings([...selectedToppings, topping]);
        }
    };

    const hitungTotalHarga = () => {
        const totalToppingPrice = selectedToppings.reduce((total, topping) => total + topping.price, 0);
        return hargaminuman + totalToppingPrice;
    };


    const handleBeliClick = (items) => {
        toggleTopping(items);
    };


    // const cartId = Math.floor(Math.random() * 1000);
    const toAddCart = {
        user: storedUser.id,
        product: product.id,
        quantity: selectedToppings.length,
        toping: selectedToppings,
        totalAmount: hitungTotalHarga()
    };



    // console.log("toAddCart", toAddCart)

    // console.log("selectedToppings", selectedToppings)
    const formatter = new Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'IDR',
    });


    const handleChart = (e, topping) => {
        e.preventDefault();
        // navigate(`/carts/${product.id}`)


        // console.log("item", item);
        try {
            dispatch(addCheckout(toAddCart));
            alert("Produk ditambahkan ke keranjang");
            setSelectedToppings(selectedToppings.filter(item => item == topping));
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <Container maxW={'container.xl'} mt={6}>
                <form onSubmit={handleChart}>
                    <Flex justifyContent={"start"} gap={3}>

                        <Button color={'white'} background={'#BD0707'} px={8} py={5} borderRadius={'5px'} height={'30px'} mb={4}>
                            <IoArrowBackCircle style={{ margin: '15px', color: 'white' }} />  <Link to={'/'}>Kembai</Link>
                        </Button>
                        <Box >
                            <Button background={'#BD0707'} color={'white'} ><Link to={`/addToping/${product.id}`}>Tambah Toping</Link></Button>
                        </Box>
                    </Flex>
                    <Flex flexWrap={'wrap'} justifyContent={'space-evenly'} gap={9}>
                        <Box flex={1.2} display={'flex'} justifyContent={'center'}  >
                            <Box width={'470px'} height={'630px'} >
                                <Image width={'100%'} height={'630px'} objectFit={'cover'} src={`${product.image}`} alt={product.name} borderRadius={3} />
                            </Box>
                        </Box>
                        <Box flex={2.7} width={'600px'} >
                            <Box mb='100px'>
                                <Heading as={'h4'} size={'lg'} color={'#BD0707'}>{product.name}</Heading>
                                <Text color={'#BD0707'} mt={7}> {formatter.format(product.price)}</Text>
                            </Box>
                            <Heading as={'h4'} size={'sm'} color={'#BD0707'}>{product.name}</Heading>
                            <Flex justifyContent={'space-between'} flexWrap={"wrap"} gap={4} mt={'20px'} >
                                {product.topings && product.topings.map((item) => (
                                    <Box key={item.id} position={'relative'} width={'150px'} height={'150px'} objectFit={'cover'} onClick={() => handleBeliClick(item)}>
                                        <Image src={item.image} alt={item.name} width={'80px'} height={'80px'} borderRadius={'45%'} margin={'auto'} />
                                        {selectedToppings.includes(item) && (
                                            <BsCheckCircleFill
                                                style={{
                                                    position: 'absolute',
                                                    top: '15px',
                                                    right: '30px',
                                                    color: 'green',
                                                    zIndex: 1,
                                                }}
                                            />
                                        )}
                                        <Text color={'#BD0707'} align={'center'}>
                                            {item.name}
                                        </Text>
                                    </Box>
                                ))}
                                <Flex flexDir={'column'} width={'100%'}>
                                    <Flex justifyContent={'space-between'} alignItems={'center'} mb={4}>
                                        <Heading as={'h4'} size={'sm'} color={'#BD0707'}>Total</Heading>
                                        <Heading as={'h4'} size={'sm'} color={'#BD0707'}>RP. {formatter.format(hitungTotalHarga())}</Heading>
                                    </Flex>
                                    <Button background={'#BD0707'} color={'white'} size={'sm'} type={'submit'}>Add To Cart</Button>
                                </Flex>

                            </Flex>
                        </Box>
                    </Flex>
                </form>

            </Container>
        </>
    )
}

export default ProductID
