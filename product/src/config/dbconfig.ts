// dbconfig.ts

import { Sequelize } from 'sequelize';
import { SequelizeOptions } from 'sequelize-typescript';
import path from 'path'; // Import the 'path' module
//import { Product } from '../models/ProductModel';
//import { Category } from '../models/CategoryModel';

const dbConfig: SequelizeOptions = {
  dialect: 'mysql', // Change the dialect to 'mysql'
  host: '127.0.0.1',
  database: 'product', // Replace with your MySQL database name
  username: 'root', // Replace with your MySQL username
  password: 'mysql', // Replace with your MySQL password
  port: 3306, // Change the port to the MySQL port (usually 3306)
  models: [path.join(__dirname, '../models')], // Use 'path.join' to specify the directory
  define: {
    schema: 'products', // Specify the schema name
  },
};

const sequelize = new Sequelize(dbConfig);

// No need to call addModels when using sequelize-typescript

export default sequelize;
