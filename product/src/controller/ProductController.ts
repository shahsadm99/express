import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
  async getProduct(req: Request, res: Response): Promise<void> {
    try {
      const products = await ProductService.getAllProducts();

      res.status(200).json({ products });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new ProductController();
