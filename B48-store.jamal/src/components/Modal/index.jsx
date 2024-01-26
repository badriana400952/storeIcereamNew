// import {
//    Modal,
//    ModalOverlay,
//    ModalContent,
//    ModalHeader,
//    ModalFooter,
//    ModalBody,
//    ModalCloseButton,
//    useDisclosure,
//    Button,
//    FormControl,
//    Input,
//    FormLabel,
// } from '@chakra-ui/react'
// import { useRef, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addToping } from '../../store/product/TopingSlice'
// import { getProductID } from '../../store/product/ProductSlice'




// export const ModalToping = (props) => {

//    const productssID = props.id
//    console.log('productssID', productssID);


//    const { isOpen, onOpen, onClose } = useDisclosure()
//    const dispatch = useDispatch()
//    const initialRef = useRef(null)
//    const finalRef = useRef(null)
//    const [createToping, setCreateToping] = useState({
//       name: '',
//       price: '',
//       image: '',
//       productId: productssID,
//    })

//    console.log('createToping 1', createToping)
//    const handleChange = (e) => {
//       const { files, name, value } = e.target
//       if (files) {
//          setCreateToping({ ...createToping, [name]: files[0] })
//       } else {
//          setCreateToping({ ...createToping, [name]: value })
//       }
//    }
//    const handleSubmit = async(e) => {
//       e.preventDefault();
//       try {
//         await dispatch(addToping(createToping))
//          console.log('createToping', createToping)
//          await dispatch(getProductID(props))
//       } catch (error) {
//          console.log(error)
//       }
//    }

//    return (
//       <>
//          <Button onClick={onOpen} background={'#BD0707'} color={'white'}>Add Toping</Button>

//          <Modal
//             initialFocusRef={initialRef}
//             finalFocusRef={finalRef}
//             isOpen={isOpen}
//             onClose={onClose}
//          >
//             <ModalOverlay />
//             <form onSubmit={handleSubmit}>
//                <ModalContent>
//                   <ModalHeader>Create Toping</ModalHeader>
//                   <ModalCloseButton />
//                   <ModalBody pb={6}>
//                      <FormControl>
//                         <Input placeholder='productID' name='productId' type='text' onChange={handleChange} disabled defaultValue={productssID}/>
//                      </FormControl>

//                      <FormControl>
//                         <FormLabel>Name Toping</FormLabel>
//                         <Input ref={initialRef} placeholder='Name' name='name' type='text' onChange={handleChange} />
//                      </FormControl>

//                      <FormControl mt={4}>
//                         <FormLabel>Price</FormLabel>
//                         <Input placeholder='Price' name='price' type='number' onChange={handleChange} />
//                      </FormControl>

//                      <FormControl mt={4}>
//                         <FormLabel>Image</FormLabel>
//                         <Input placeholder='Image' name='image' type='file' onChange={handleChange} />
//                      </FormControl>
//                   </ModalBody>

//                   <ModalFooter>
//                      <Button colorScheme='blue' mr={3} type='submit' onClick={onClose}>
//                         Save
//                      </Button>
//                      <Button onClick={onClose}>Cancel</Button>
//                   </ModalFooter>
//                </ModalContent>
//             </form>
//          </Modal>
//       </>
//    )
// }
