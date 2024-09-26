import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice';
import productSlice from "./admin/product-slice";
import shopProductSlice from "./shop/products-slice"
import cartProductSlice from "./shop/cart-slice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productSlice,
        shopProducts: shopProductSlice,
        
        cart: cartProductSlice
    }
});

export default store;
