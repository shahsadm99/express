// src/models/IOrder.ts

import { Document } from 'mongoose';

// Define the interface for the Order
export interface IOrder extends Document {
  name: string;
  qty: number;
  // Add other fields as needed
}

