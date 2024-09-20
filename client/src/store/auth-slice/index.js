import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';




const initialState={
    isAuthenticated: false,
    isLoading: true,
    user:null
}
//When you use createAsyncThunk, it automatically generates action creators for the three action states (pending, fulfilled, rejected) and manages their lifecycle.
//registerUser becomes a thunk action creator. When you dispatch registerUser(formData), it runs the async function you provided, dispatches actions based on the promise state (pending, fulfilled, or rejected), and passes the result to the reducer.
export const registerUser=createAsyncThunk('/auth/register',
    //username,email,password
    async(formData)=>{
        const response=await axios.post('http://localhost:5000/api/auth/register',formData,{
            withCredentials:true
        });
        return response.data;
    }
)
//to store this sdata, we use extraREducers below

export const loginUser=createAsyncThunk('/auth/login',
    //username,email,password
    async(formData)=>{
        const response=await axios.post('http://localhost:5000/api/auth/login',formData,{
            withCredentials:true
        });
        return response.data;
    }
)
export const logoutUser = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    try {
      // Make the API call to log out
      const response = await axios.post('http://localhost:5000/api/auth/logout');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });

export const checkAuth = createAsyncThunk('/auth/checkauth', async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/auth/check-auth', {
            withCredentials: true,
            headers: {
                'Cache-Control': 'no-store, no-cache',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
        return response.data;
    } catch (error) {
        // Handle errors here if needed
        throw error;
    }
});
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
        }
    },
        extraReducers:(builder)=>{
            builder.addCase(registerUser.pending,(state)=>{
                state.isLoading=true
            }).addCase(registerUser.fulfilled,(state,action)=>{
               state.isLoading=false ;
               state.user=null;
               state.isAuthenticated=false
            }).addCase(registerUser.rejected,(state,action)=>{
                state.isLoading=false ;
                state.user=null;
                state.isAuthenticated=false
             });
             builder
             .addCase(loginUser.pending, (state) => {
               state.isLoading = true;
               state.isError = false;
               state.errorMessage = '';
             })
             .addCase(loginUser.fulfilled, (state, action) => {
                console.log('Login fulfilled payload:', action.payload); // Log payload
                state.isLoading=false ;
                console.log('Action:', action); // Log entire action object
            if (action.payload.success) {
                state.user = action.payload.user; // Store user data from response
                state.isAuthenticated = true;
              } else {
                state.user = null;
                state.isAuthenticated = false;
              }
            })
             .addCase(loginUser.rejected, (state, action) => {
                console.log('Login rejected:', action.error.message);
                state.isLoading = false;
               state.isError = true;
               state.errorMessage = action.error.message; // Store error message
               state.user = null;
               state.isAuthenticated = false;
             });
             builder
             .addCase(checkAuth.pending, (state) => {
               state.isLoading = true;
               state.isError = false;
               state.errorMessage = '';
             })
             .addCase(checkAuth.fulfilled, (state, action) => {
                console.log('Login fulfilled payload:', action.payload); // Log payload
                console.log('Action:', action); // Log entire action object
                state.isLoading=false ;
            if (action.payload.success) {
                state.user = action.payload.user; // Store user data from response
                state.isAuthenticated = true;
              } else {
                state.user = null;
                state.isAuthenticated = false;
              }
            })
             .addCase(checkAuth.rejected, (state, action) => {
                console.log('Login rejected:', action.error.message);
                state.isLoading = false;
               state.isError = true;
               state.errorMessage = action.error.message; // Store error message
               state.user = null;
               state.isAuthenticated = false;
             }).addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.isAuthenticated = false;
                // Optionally, you can clear any other session-related state here
              });
        
        }
    }
)

export const {setUser}=authSlice.actions;
export default authSlice.reducer;