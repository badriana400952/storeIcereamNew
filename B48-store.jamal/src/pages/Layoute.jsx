'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Container,
  Text, Button, Avatar, MenuList, Center, Divider, MenuItem,MenuButton
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import logos from '../assets/logos.png'
import { Link, Outlet, Navigate,useNavigate } from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCheckout } from '../store/product/CheckOutSlice'
import { logout } from '../store/user/UserSlice'


const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function ResponsiveAppBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const { checkout } = useSelector((state) => state.checkout)
  useEffect(() => {
    dispatch(getCheckout())
  }, [dispatch])
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  if (token === null) {
    return <Navigate to={`/layoutenav`} />
  }
  const handleLogout = () => {
    dispatch(logout())
    navigate('/layoutenav')
  }
  return (
    <>
      <Box px={4}>
        <Container maxW={'container.2xl'}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Link to={`/`}>
                <Image src={logos} alt="logo" width={'50px'} height={'50px'} />
              </Link>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    name={`${user.firstName}`}
                    src={'#'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      name={`${user.firstName}`}
                      src={'#'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <Divider />

                  <MenuItem><Button onClick={handleLogout}>Logout</Button></MenuItem>
                </MenuList>

                <Link to={`/carts`}>
                  <Box width={"60px"} color={'#BD0707'} padding={4} borderRadius={'50%'}  >
                    <Text bg={"#BD0707"} paddingX={'6px'} paddingY={'1px'} color={'white'} zIndex={8} fontSize={"12px"} borderRadius={"50%"} position={"absolute"} right={"30px"} top={"5px"}>{checkout.length}
                    </Text>
                    <BsCart4 style={{ width: '30px', height: '30px' }} />
                  </Box>
                </Link>

              </Menu>
            </Flex>
          </Flex>
        </Container>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Outlet />
    </>
  )
}