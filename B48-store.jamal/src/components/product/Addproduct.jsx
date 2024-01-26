import { Box, Button, Container, Flex, FormControl, FormLabel, Image, Input } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct, getProduct } from "../../store/product/ProductSlice"
import { useNavigate, useParams } from "react-router-dom"
import copii from "../../assets/copii.png"
import { CiImageOn } from "react-icons/ci";

const Addproduct = () => {
  const dispatch = useDispatch()
  const {id} = useParams()

  const navigate = useNavigate()
  const [tambahProduct, setTambahProduct] = useState({
    userId: id,
    name: '',
    price: '',
    image: ''
  })

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setTambahProduct({ ...tambahProduct, [name]: files[0] });
    } else {
      setTambahProduct({ ...tambahProduct, [name]: value });
    }
  };





  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await dispatch(addProduct(tambahProduct))
      navigate('/');
      dispatch(getProduct())
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container maxWidth={'container.xl'} mt={9}>
        <Flex justifyContent={"space-evenly"} flexWrap={"wrap"} gap={7}>
          <Box flex={1.8} >
            <form onSubmit={handleSubmit}>
              <Box >
              <FormControl paddingBottom={7}>
                  <FormLabel>User ID</FormLabel>
                  <Input borderColor={"red.200"} type='text' onChange={handleInputChange} name="userId" placeholder="User ID"  value={id}/>
                </FormControl>
                <FormControl paddingBottom={7}>
                  <FormLabel>Nama Product</FormLabel>
                  <Input borderColor={"red.200"} type='text' onChange={handleInputChange} name="name" placeholder="Nama Product" />
                </FormControl>

                <FormControl paddingBottom={7}>
                  <FormLabel>price</FormLabel>
                  <Input borderColor={"red.200"} type='number' name="price" onChange={handleInputChange} placeholder="Price" />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="img" height={"100px"} cursor={"pointer"}><CiImageOn style={{ width: '100px', color: 'gray', height: '100px' }} /></FormLabel>
                  <Input borderColor={"red.200"} type='file' id="img" name="image" onChange={handleInputChange}
                    display={'none'}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <Button type="submit" px={9} bg={'#BD0707'} color={'white'}>Add</Button>
                </FormControl>

              </Box>
            </form>
          </Box>
          <Box flex={1.2}>
            <Box width={'100%'} height={'100%'}>
              <Image src={copii} alt="copii" width={'80%'} />
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Addproduct
