import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCheckout = createAsyncThunk("checkout/getCheckout", async () => {
    const res = await axios.get(`http://localhost:5000/checkoute`, {
        headers: {
           Authorization: `Bearer ${localStorage.token}`,
        }
     });
    return res.data
})

export const getCheckoutID = createAsyncThunk("checkout/getCheckoutID", async (id) => {
    const ress = await axios.get(`http://localhost:5000/checkoute/${id}`);
    return ress.data
})

export const addCheckout = createAsyncThunk("checkout/addCheckout", async (tambahCheckout) => {
    const response = await axios.post(`http://localhost:5000/checkoute`, tambahCheckout,{
        headers: {
           Authorization: `Bearer ${localStorage.token}`,
        }
    })
    return response.data
})
export const deleteCheckout = createAsyncThunk("checkout/deleteCheckout", async (id) => {
    const response = await axios.delete(`http://localhost:5000/checkoute/${id}`,{
        headers: {
           Authorization: `Bearer ${localStorage.token}`,
        }
    })
    return response.data
})
 const CheckOutSlice = createSlice({
    name: "checkout",
    initialState: {
        checkout: [],
        loading: false,
        error: null
    },
    reducers:{},
    extraReducers:{
        [getCheckout.pending]:(state)=>{
            state.loading = true;
            state.error = null;
        },
        [getCheckout.fulfilled]:(state, action)=>{
            state.loading = false;
            state.checkout = action.payload;
        },
        [getCheckout.rejected]:(state, action)=>{
            state.loading = false;
            state.error = action.error.message
        },

        [getCheckoutID.pending]:(state)=>{
            state.loading = true;
            state.error = null;
        },
        [getCheckoutID.fulfilled]:(state, action)=>{
            state.loading = false;
            state.checkout = action.payload;
        },
        [getCheckoutID.rejected]:(state, action)=>{
            state.loading = false;
            state.error = action.error.message
        },

        [addCheckout.pending]:(state)=>{
            state.loading = true;
            state.error = null;
        },
        [addCheckout.fulfilled]:(state, action)=>{
            state.loading = false;
            state.checkout = action.payload;
        },
        [addCheckout.rejected]:(state, action)=>{
            state.loading = false;
            state.error = action.error.message
        },

        [deleteCheckout.pending]:(state)=>{
            state.loading = true;
            state.error = null;
        },
        [deleteCheckout.fulfilled]:(state, action)=>{
            state.loading = false;
            state.checkout = action.payload;
        },
        [deleteCheckout.rejected]:(state, action)=>{
            state.loading = false;
            state.error = action.error.message
        }

    }
})

export default CheckOutSlice.reducer 