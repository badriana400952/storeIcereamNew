import { createSlice } from "@reduxjs/toolkit";


import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiData } from "../../services/api";
const initialState = {
   message: "",
   users: "",
   token: "",
   loading: false,
   error: "",
};

export const checkUser = createAsyncThunk("user/checkUser", async () => {
   try {
      const response = await ApiData.get(`/check`, {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`,
         }
      });
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
})

export const getUser = createAsyncThunk("user/getUser", async () => {
   try {
      const response = await ApiData.get(`/users`, {
         headers: {
            Authorization: `Bearer ${localStorage.token}`,
         }
      });
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
});

export const registerUser = createAsyncThunk("user/registerUser", async (newData) => {
   try {
      const response = await ApiData.post(`/users`, newData, {
         headers: {
            Authorization: `Bearer ${localStorage.token}`,
         }
      });
      return response.data;

   } catch (error) {
      console.log(error);
      throw error; // Re-throw the error so that the rejected state is propagated
   }
});


export const LoginUser = createAsyncThunk("user/LoginUser", async (login) => {
   try {
      const response = await ApiData.post(`/login`, login, {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.token}`,
         }
      });
      localStorage.setItem("token", response.data.token);
      return response.data
   } catch (error) {
      console.log(error);
      throw error;
   }
})


export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      addToken: (state) => {
         state.token = localStorage.getItem("token");
      },
      addUser: (state) => {
         state.user = localStorage.getItem("user");
      },
      logout: (state) => {
         localStorage.removeItem("token");
         localStorage.removeItem("user");
         state.token = null;
         state.user = null;
      }

   },
   extraReducers: (builder) => {

      builder.addCase(checkUser.pending, (state) => {
         state.loading = true;
         state.error = null
      });
      builder.addCase(checkUser.fulfilled, (state, action) => {
         state.loading = false;
         state.data = action.payload;
      });
      builder.addCase(checkUser.rejected, (state, action) => {
         state.loading = false;
         state.error = action.error.message
      });


      builder.addCase(getUser.pending, (state) => {
         state.loading = true;
         state.error = null
      });
      builder.addCase(getUser.fulfilled, (state, action) => {
         state.loading = false;
         state.data = action.payload;
      });
      builder.addCase(getUser.rejected, (state, action) => {
         state.loading = false;
         state.error = action.error.message
      });


      builder.addCase(registerUser.pending, (state) => {
         state.loading = true;
         state.error = null
      });
      builder.addCase(registerUser.fulfilled, (state, action) => {
         state.loading = false;
         state.data = action.payload;
      });
      builder.addCase(registerUser.rejected, (state, action) => {
         state.loading = false;
         state.error = action.error.message
      });

      ///////////login//////////////////

      builder.addCase(LoginUser.pending, (state) => {
         state.loading = true;
         state.error
      });
      builder.addCase(LoginUser.fulfilled, (state, { payload: { error, message, token, users } }) => {
         state.loading = false;
         if (error) {
            state.error = error
         } else {
            state.message = message
            state.token = token
            state.users = users

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(users));
            localStorage.setItem("message", message);
         }
      });
      builder.addCase(LoginUser.rejected, (state, action) => {
         state.loading = false;
         state.error = action.error.message
      })


   },
});
export const {addToken, addUser, logout} = userSlice.actions;

export default userSlice.reducer;