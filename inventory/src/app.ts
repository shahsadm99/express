import express from 'express';
import { Request, Response } from 'express';
import InventoryController from './controller/InventoryController';
import { QueryTypes } from 'sequelize';
import sequelize from './config/dbconfig'; // Import your Sequelize instance


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON request bodies

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    // Query the information_schema to fetch table names
    const [results] = await sequelize.query(
      'SELECT table_name FROM information_schema.tables WHERE table_schema = :schema',
      {
        replacements: { schema: 'products' },
        type: QueryTypes.SELECT,
      }
    );

    if (results && Array.isArray(results)) {
      const tableNames = results.map((result: any) => result.table_name);
      console.log('Table names:', tableNames);
    } else {
      console.log('No tables found in the database.');
    }

    await sequelize.sync({ force: false });
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Define a route that uses a controller method without .bind()
app.get('/api/inventory', (req: Request, res: Response) => {
  
  const { productName } = req.query;
  InventoryController.getInventory(productName, res);
});

app.get('/inventory', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
