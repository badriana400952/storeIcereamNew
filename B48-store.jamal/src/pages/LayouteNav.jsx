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
  Button,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import logos from '../assets/logos.png'
import { Link, Outlet, } from 'react-router-dom'



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

export default function LayouteNav() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // const token = localStorage.getItem('token')
  // if(token === null){
  //   return <Navigate to={`/login`}/>
  // }

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
              <Image src={logos} alt="logo" width={'50px'} height={'50px'} />
            </HStack>
            <Flex alignItems={'center'}>
              <Menu >

                <Button mx={4} px={7} bg={'#BD0707'} color={'white'}>
                  <Link to={`/login`} >Login</Link>
                </Button>
                <Button  px={7} bg={'#BD0707'} color={'white'}>
                  <Link to={`/register`} >Register</Link>
                </Button>

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