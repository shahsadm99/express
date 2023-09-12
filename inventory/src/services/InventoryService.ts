import { Inventory } from "../models/InventoryModel";

export class InventoryService {
  async isInStock(productName: String): Promise<boolean> {
    try {
      
      // Replace this with your actual inventory checking logic
      // For demonstration purposes, we always assume the item is in stock
      const itemInStock = await Inventory.findOne({
        where: {
          name: productName,
        },
      });
  ;

      if (itemInStock) return true ;
      else return false;
    } catch (error) {
      // Handle any errors that occur during the inventory check
      console.error('Error checking inventory:', error);
      throw error; // You might want to handle this differently based on your application's needs
    }
  }
}
