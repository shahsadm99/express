
import { SequelizeOptions, Sequelize } from 'sequelize-typescript';
import { Inventory } from '../models/InventoryModel';
import { Product } from '../models/ProductModel';


const sequelize = new Sequelize({
  database: 'Shopping',
  dialect: 'postgres',
  username: 'postgres',
  password: '123',
  port: 5432,
  models: [Inventory,Product], 
});


export default sequelize;
