require('dotenv').config();

const express=require('express')
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const cors=require('cors');

const authRouter=require('./routes/auth/auth-routes')
const adminProductsRouter=require('./routes/admin/products-route')
const shopProductsRouter =require('./routes/shop/products-routes')
const CartRouter =require('./routes/shop/cart-routes')
const AddressRouter =require('./routes/shop/address-routes')
const OrderRouter =require('./routes/shop/order-routes');
const AllOrderRouter =require('./routes/admin/order-routes')
const directionsRouter = require('./routes/directions'); // Import the directions router

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
app.use('/api/shop/products',shopProductsRouter)
app.use('/api/shop/carts',CartRouter)
app.use('/api/shop/address',AddressRouter)
app.use('/api/shop/order',OrderRouter)
app.use('/api/admin/orders',AllOrderRouter)
app.use('/api/directions', directionsRouter); // Use the directions router for /api/directions path

app.listen(PORT,()=>console.log(`server is running on port  ${PORT}`))