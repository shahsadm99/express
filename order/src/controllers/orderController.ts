// src/controllers/UserController.ts

import { Request, Response } from 'express';
import orderModel from '../models/orderModel';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { name, qty } = req.body;
    const order = new orderModel({ name, qty});
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
