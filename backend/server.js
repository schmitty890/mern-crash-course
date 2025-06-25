import express from 'express';
import { connectDB } from './config/db.js';
import ProductRoutes from './routes/product.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // allows us to accept json data in req.body

app.use('/api/products', ProductRoutes);

// console.log(process.env.MONGO_URI);
app.listen(PORT, () => {
  connectDB();
  console.log(`server started on port http://localhost:${PORT}`);
});
