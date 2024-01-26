import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../store/user/UserSlice"
import { useState } from "react"
const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [registers, setRegisters] = useState({
    firstName: '',
    email: '',
    password: '',
    handphone: ''
  })



  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisters({ ...registers, [name]: value });
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log("newData", registers)

      const data = await dispatch(registerUser(registers))
      console.log("data berhasil di tambahkan", data)
      navigate('/login')
      alert('Register Berhasil')
    } catch (error) {
      console.log(error) 
    }
  }


  return (
    <>
      <Container maxW="container.2xl" bg={"blackAlpha.200"} h={"100vh"}>
        <Flex justifyContent={"center"}>
          <Box mt={10} bg={"white"} p={10} w={"40%"} minW={"400px"} color={"#BD0707"} borderRadius={"10px"}>
            <Heading as={"h2"} size="lg" mb={5} color={"#BD0707"}>Register</Heading>
            <form onSubmit={handleSubmit}>
              <FormControl py={3}>
                <FormLabel>Name</FormLabel>
                <Input type='text' name="firstName" padding={"10px"} border={"3px solid #BD0707"} onChange={handleChange} required/>
              </FormControl>


              <FormControl py={3}>
                <FormLabel>Email</FormLabel>
                <Input type='email' name="email" padding={"10px"} border={"3px solid #BD0707"} onChange={handleChange} required/>
              </FormControl>

              <FormControl py={3}>
                <FormLabel>Password</FormLabel>
                <Input type='password' name="password" padding={"10px"} border={"3px solid #BD0707"} onChange={handleChange} required/>
              </FormControl>

              <FormControl py={3}>
                <FormLabel>Handphone</FormLabel>
                <Input type='text' name="handphone" padding={"10px"} border={"3px solid #BD0707"} onChange={handleChange} required/>
              </FormControl>

              <FormControl py={3}>
                <Button type='submit' bg={"#BD0707"} color={"white"} w={"100%"}>Register</Button>
              </FormControl>
              <Text fontSize={"2sm"} textAlign={"center"} color={"black"} >Already have an account ?  <Link to="/login">Klik <span style={{ fontWeight: "bold" }}>Here</span></Link></Text>
            </form>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Register
