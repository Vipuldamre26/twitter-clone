import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';

import connectMongoDB from './db/connectMongoDB.js';

dotenv.config();


// We connect cloudinary cloud account for storing files 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


const app = express();
const PORT = process.env.PORT || 5000;


// middlewares 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// console.log(process.env.MONGO_URL);
connectMongoDB();



// routes 

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));