const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors'); // Import CORS middleware
const connectDB = require('./config/db');

// .env 
require('dotenv').config();

// Initialize Express app
const app = express();

// CORS middleware
app.use(cors());

// Body-parser middleware
app.use(bodyParser.json());

// MongoDB connection
connectDB();

// routes
app.use('/api/user', userRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Server running!');
});

// Define port
const port = process.env.PORT || 8000;

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});