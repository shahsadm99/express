// src/models/Order.ts

import { Schema, model } from 'mongoose';
import { IOrder } from '../interfaces/IOrder';

// Create a Mongoose schema for the Order
const orderSchema = new Schema<IOrder>({
  name: String,
  qty: Number,
  // Define other schema fields as needed
});

// Create a Mongoose model for the Order
export default model<IOrder>('Order', orderSchema);
