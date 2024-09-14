import { configureStore } from "@reduxjs/toolkit";
//whatever default
import authReducer from './auth-slice'




const store=configureStore({
    reducer:{
auth:authReducer
    }
});
export default store;