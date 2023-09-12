// src/app.ts

import express from 'express';
import mongoose from 'mongoose';
import { createOrder } from './controllers/orderController';

const app = express();
const port = process.env.PORT || 3003;

mongoose.connect('mongodb://localhost:27017/shopping').then (()=>console.log('connected to db'));

app.use(express.json());

app.post('/api/orders', createOrder);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
