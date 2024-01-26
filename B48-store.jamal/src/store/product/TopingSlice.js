import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiData } from "../../services/api";


export const getToping = createAsyncThunk("product/getProduct", async () => {
    try {
        const ress = await ApiData.get(`/toping`, {
            headers: {
               Authorization: `Bearer ${localStorage.token}`,
            }
         });
        return ress.data
    } catch (error) {
        console.log(error);
    }
})

export const addToping = createAsyncThunk("toping/addToping", async (newdata) => {
    try {
        const response = ApiData.post(`/toping`, newdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.token}`,
            }
        })
        return response.data
        
    } catch (error) {
        console.log(error)
        throw error
    }
})


const topingSlice = createSlice({
    name: "toping",
    initialState: {
        toping: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getToping.pending, (state) => {
            state.loading = true
            state.error = null
        });

        builder.addCase(getToping.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
        });

        builder.addCase(getToping.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });


        builder.addCase(addToping.pending, (state) => {
            state.loading = true
            state.error = null
        });

        builder.addCase(addToping.fulfilled, (state, action) => {
            state.loading = false
            state.product = action.payload
        });

        builder.addCase(addToping.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        });
    }
})

export default topingSlice.reducer