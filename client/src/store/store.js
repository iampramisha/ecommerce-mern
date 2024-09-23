import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice';
import productSlice from "./admin/product-slice";
import shopProductSlice from "./shop/products-slice"
const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productSlice,
        shopProducts: shopProductSlice
    }
});

export default store;
