import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice';
import productSlice from "./admin/product-slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productSlice,
    }
});

export default store;
