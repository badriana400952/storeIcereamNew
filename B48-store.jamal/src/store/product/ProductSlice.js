import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiData } from "../../services/api";


export const getProduct = createAsyncThunk("product/getProduct", async () => {
    try {
        const ress = await ApiData.get(`/producted`, {
            headers: {
               Authorization: `Bearer ${localStorage.token}`,
            }
         });
        return ress.data
    } catch (error) {
        console.log(error);
    }
})

export const getProductNav = createAsyncThunk("product/getProductNav", async () => {
    try {
        const ress = await ApiData.get(`/productnav`)
        return ress.data
    } catch (error) {
        console.log(error);
    }
})                                                                                      
export const getProductID = createAsyncThunk("product/getProductID", async (id) => {
    try {
        const ress = await ApiData.get(`/productid/${id}`, {
            headers: {
                // 'Content-Type': 'application/json',
               Authorization: `Bearer ${localStorage.token}`,
            }
         });
        return ress.data
    } catch (error) {
        console.log(error);
        throw error
    }
})


export const addProduct = createAsyncThunk("product/addProduct", async (tambahProduct) => {
    const formData = new FormData();
    formData.append("name", tambahProduct.name)
    formData.append("price", tambahProduct.price)
    formData.append("image", tambahProduct.image)
    try {
        const response = await ApiData.post(`/product`, tambahProduct, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.token}`,
        },
    })
    return response.data
    } catch (error) {
       console.log(error) 
    }
    
})


const productSlice = createSlice({
    name: "product",
    initialState: {
        product: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {


   




        builder.addCase(getProduct.pending, (state) => {
            state.loading = true
            state.error = null
        });

        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
        });

        builder.addCase(getProduct.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });



        builder.addCase(getProductNav.pending, (state) => {
            state.loading = true
            state.error = null
        });

        builder.addCase(getProductNav.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
        });

        builder.addCase(getProductNav.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });



        builder.addCase(getProductID.pending, (state) => {
            state.loading = true
            state.error = null
        });

        builder.addCase(getProductID.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
        });

        builder.addCase(getProductID.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        

        builder.addCase(addProduct.pending, (state) => {
            state.loading = true
            state.error = null
        });

        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
        });

        builder.addCase(addProduct.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });
    }
})

export default productSlice.reducer 