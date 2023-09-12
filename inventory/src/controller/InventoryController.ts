import { Request, Response } from 'express';
import { InventoryService } from '../services/InventoryService';

class InventoryController {
  async getInventory(productName: any, res: Response): Promise<void> {
    try {
      console.log(productName);
      const inventoryService = new InventoryService();
      const isItemInStock = await inventoryService.isInStock(productName);

      res.status(200).json({ inStock: isItemInStock });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new InventoryController();
