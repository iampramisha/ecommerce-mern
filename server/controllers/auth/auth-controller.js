const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const { User } = require('../../models/User');
// const User=require('../../models/User')






const registerUser=async(req,res)=>{
    //get from req.body
    const {userName,email,password}=req.body;
try{
const hashPassword=await bcrypt.hash(password,12);
const newUser=new User({
    userName, email,
    //passed the hashed pasword
    password: hashPassword
})
//save the new user created
await newUser.save(); 
res.status(200).json({
    success:true,
    message:"registration successful"
})
}catch(e){
console.log(e);
res.status(500).json({

    success:false,
    message:'some error occured'
})
}
}
 //login
 
const login=async(req,res)=>{
    //get from req.body
    const {email,password}=req.body 
try{

}catch(e){
console.log(e);
res.status(500).json({

    success:false,
    message:'some error occured'
})
}
}

module.exports={registerUser};