import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { addToping } from "../store/product/TopingSlice"
import { getProductID } from "../store/product/ProductSlice"

const HooksTopping = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()
    const [createToping, setCreateToping] = useState({
      name: '',
      price: '',
      image: '',
      productId: id,
    })
  
    const handleInputChange = (e) => {
      const { name, value, files } = e.target;
      if (files) {
        setCreateToping({ ...createToping, [name]: files[0] });
      } else {
        setCreateToping({ ...createToping, [name]: value });
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await dispatch(addToping(createToping))
        console.log('createToping', createToping)
        navigate(`/${id}`)
        await dispatch(getProductID(id))
      } catch (error) {
        console.log(error)
      }
    }



  return { handleInputChange,handleSubmit,id}
}

export default HooksTopping
