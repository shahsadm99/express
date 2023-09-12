import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ProductService {
  async getAllProducts() {
    try {
      const products = await prisma.product.findMany();
      return products;
    } catch (error) {
      throw new Error('Unable to fetch products');
    }
  }
}

export default new ProductService();
