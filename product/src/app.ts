import express from 'express';
import { Request, Response } from 'express';
import ProductController from './controller/ProductController';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/product', (req: Request, res: Response) => {
  ProductController.getProduct(req, res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
