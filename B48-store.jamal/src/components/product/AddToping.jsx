import { Box, Button, Container, Flex, FormControl, FormLabel, Image, Input } from "@chakra-ui/react"
import copii from "../../assets/copii.png"

import HooksTopping from "../../hooks/HooksTopping"

const AddToping = () => {

  const {handleInputChange,handleSubmit,id} = HooksTopping()
  // const dispatch = useDispatch()
  // const { id } = useParams()
  // const navigate = useNavigate()
  // const [createToping, setCreateToping] = useState({
  //   name: '',
  //   price: '',
  //   image: '',
  //   productId: id,
  // })

  // const handleInputChange = (e) => {
  //   const { name, value, files } = e.target;
  //   if (files) {
  //     setCreateToping({ ...createToping, [name]: files[0] });
  //   } else {
  //     setCreateToping({ ...createToping, [name]: value });
  //   }
  // };





  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await dispatch(addToping(createToping))
  //     console.log('createToping', createToping)
  //     navigate(`/${id}`)
  //     await dispatch(getProductID(id))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <>
      <Container maxWidth={'container.xl'} mt={9}>
        <Flex justifyContent={"space-evenly"} flexWrap={"wrap"} gap={7}>
          <Box flex={1.8} >
            <form onSubmit={handleSubmit}>
              <Box >
                <FormControl>
                  <Input placeholder='productID' name='productId' type='text' onChange={handleInputChange} disabled value={id} />
                </FormControl>

                <FormControl>
                  <FormLabel>Name Toping</FormLabel>
                  <Input placeholder='Name' name='name' type='text' onChange={handleInputChange} />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Price</FormLabel>
                  <Input placeholder='Price' name='price' type='number' onChange={handleInputChange} />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Image</FormLabel>
                  <Input placeholder='Image' name='image' type='file' onChange={handleInputChange} />
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

export default AddToping
