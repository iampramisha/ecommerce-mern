import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Make sure you import axios

const initialState = {
    name: 'shoppingProducts',
    productList: [],
    isLoading: false, // Add isLoading to initialState
};

export const fetchAllFilteredProducts = createAsyncThunk(
    "/products/fetchAllFilteredProducts",
    async () => {
        const result = await axios.get("http://localhost:5000/api/shop/products/get");
        return result?.data;
    }
);

const shoppingProductSlice = createSlice({
    name: "shoppingProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllFilteredProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
                console.log("action payload", action.payload); // Corrected typo
                state.isLoading = false;
                state.productList = action.payload;
            })
            .addCase(fetchAllFilteredProducts.rejected, (state) => {
                state.isLoading = false;
            });
    }
});

export default shoppingProductSlice.reducer;
