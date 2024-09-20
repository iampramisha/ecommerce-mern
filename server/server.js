require('dotenv').config();

const express=require('express')
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const cors=require('cors');

const authRouter=require('./routes/auth/auth-routes')
const adminProductsRouter=require('./routes/admin/products-route')
console.log('MongoDB URI:', process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

// mongoose.connect(process.env.DATABASE_URL)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Failed to connect to MongoDB', err));
const app=express();
const PORT=process.env.PORT ||5000;
app.use(cors({
    //client side
    origin:'http://localhost:5173',
    //methods to use
    methods:['GET','POST','DELETE','PUT'],
    allowedHeaders:[
        "Content-Type",
        'Authorization',
        'Cache-control',
        'Expires',
        'Pragma'
    ],
    credentials:true
}))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//whenever w e got to /api/auth call authRouter
//and wheenevr we go to authRouter  and / register call registerUser

app.use('/api/auth', authRouter)
app.use('/api/admin/products', adminProductsRouter)
app.listen(PORT,()=>console.log(`server is running on port  ${PORT}`))