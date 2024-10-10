// features/cart/cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_API_URL}/api/shop/carts`;

// Async thunks for handling API calls

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, productId, quantity, weight }, { rejectWithValue }) => {
      try {
          // Log the input parameters to confirm they are correct
          console.log("Adding to cart:", { userId, productId, quantity, weight });
          
          const response = await axios.post(`${BASE_URL}/add`, {
              userId,
              productId,
              quantity,
              weight
          });

          return response.data; // Assuming your API returns the updated cart data in a consistent format
      } catch (error) {
          console.error("Error adding to cart:", error); // Log the error for debugging
          return rejectWithValue(error.response.data); // Handle error response
      }
  }
);

  export const fetchCartItems = createAsyncThunk(
    'cart/fetchCartItems',
    async (userId, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/shop/carts/get/${userId}`);
        return response.data; // Assuming your API returns the cart data in a consistent format
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error response
    }
  }
  );
  export const updateCartItemQty = createAsyncThunk(
    'cart/updateCartItemQty',
    async ({ userId, productId, quantity }, { rejectWithValue }) => {
      try {
        const response = await axios.put(`${BASE_URL}/update-cart/${userId}/${productId}`, {
          userId,
          productId,
          quantity,
        });
        return response.data.data; // Return the data from API
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async ({ userId, productId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/shop/carts/${userId}/${productId}`);
      return response; // Return the data from API
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// Initial state
const initialState = {
  items: [],
  status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

// Cart slice
// Cart slice
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        // Handle getCart
        .addCase(fetchCartItems.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchCartItems.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload.data.items; // Assuming the consistent format
          })
          .addCase(fetchCartItems.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
  
        // Handle addToCart
        .addCase(addToCart.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(addToCart.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload.data.items; // Assuming the consistent format
          })
        // Handle updateCart
        .addCase(updateCartItemQty.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(updateCartItemQty.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload || [];
            console.log('Updated cart items after updateCart:', state.items);
          })
          
        .addCase(updateCartItemQty.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
  
        // Handle removeFromCart
        .addCase(removeFromCart.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(removeFromCart.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload.products; // Update items after removal
          console.log('Updated cart items after removeFromCart:', state.items); // Log updated items
        })
        .addCase(removeFromCart.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    },
  });
  
export default cartSlice.reducer;
