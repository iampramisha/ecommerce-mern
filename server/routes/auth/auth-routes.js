//by which route to call which conroller
const express=require('express')
const { registerUser }=require('../../controllers/auth/auth-controller.js')
const router=express.Router();
//whenever from fronted we call this route, call registerUser controller 
router.post('/register', registerUser);
module.exports=router;