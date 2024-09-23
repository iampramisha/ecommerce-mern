import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    name: 'shoppingProducts',
    productList: [],
    isLoading: false,
};

export const fetchAllFilteredProducts = createAsyncThunk(
    'shoppingProducts/fetchAllFilteredProducts',
    async () => {
      const result = await axios.get('http://localhost:5000/api/shop/products/get'); // Replace with your API endpoint
      console.log(result);

      return result?.data; // Returning the entire response object
    }
  );

const shoppingProductSlice = createSlice({
    name: "shoppingProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllFilteredProducts.pending, (state, action) => {
          state.isLoading = true;
        })
        .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
            console.log("Full action object:", action);
            console.log("action payload", action.payload);
            state.isLoading = false;
          
            state.productList = action.payload.data; // Adjust based on the response structure
            state.status = 'succeeded';
          })
          .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.status = 'failed';
            console.error("Failed to fetch products", action.error.message);
          });
    }})

export default shoppingProductSlice.reducer;
