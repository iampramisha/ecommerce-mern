import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice';
import productSlice from "./admin/product-slice";
import shopProductSlice from "./shop/products-slice"
import cartProductSlice from "./shop/cart-slice"
import AddressSlice from "./shop/address-slice"
import orderSlice from "./shop/order-slice"
import ordersSlice from "./admin/order-slice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productSlice,
        shopProducts: shopProductSlice,
        
        cart: cartProductSlice,
        address:AddressSlice,
        order:orderSlice,
        allOrder:ordersSlice

    }
});

export default store;
