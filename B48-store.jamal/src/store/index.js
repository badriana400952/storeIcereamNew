import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/ProductSlice";
import topingReducer from "./product/TopingSlice";
import CheckOutSlice from "./product/CheckOutSlice";
import userReducer from "./user/UserSlice";
export default configureStore({
   reducer: {
      user: userReducer,
      product: productReducer,
      toping: topingReducer,
      checkout: CheckOutSlice
   },
});
