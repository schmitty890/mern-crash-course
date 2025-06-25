import express from 'express';
import { connectDB } from './config/db.js';
import ProductRoutes from './routes/product.route.js';

const app = express();

app.use(express.json()); // allows us to accept json data in req.body

app.use('/api/products', ProductRoutes);

// console.log(process.env.MONGO_URI);
app.listen(3000, () => {
  connectDB();
  console.log(`server started on port http://localhost:3000`);
});
