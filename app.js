require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const orderRoutes   = require('./routes/orderRoutes');

const app = express();  

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use('/api/orders', orderRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
