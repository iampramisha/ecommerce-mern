import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';




const initialState={
    isAuthenticated: false,
    isLoading: false,
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

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{

        },
        extraReducers:(builder)=>{
            builder.addcase(registerUser.pending,(state)=>{
                state.isLoading=true
            }).addcase(registerUser.fulfilled,(state,action)=>{
               state.isLoading=false ;
               state.user=null;
               state.isAuthenticated=false
            }).addcase(registerUser.rejected,(state,action)=>{
                state.isLoading=false ;
                state.user=null;
                state.isAuthenticated=false
             });
        }
    }
})
export const {setUser}=authSlice.actions;
export default authSlice.reducer;