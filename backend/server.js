import express from 'express';
import dotenv from 'dotenv';

import authRouter from './routes/auth.routes.js';
import connectMongoDB from './db/connectMongoDB.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// console.log(process.env.MONGO_URL);
connectMongoDB();


app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));