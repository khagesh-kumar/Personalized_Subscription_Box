const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoutes');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());          // Enable Cross-Origin Request
app.use(express.json());  // Middleware to parse incoming JSON requests

// MongoDB connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;  // MongoDB URI from .env file

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);  // Exit the application if MongoDB connection fails
  });

// Define routes
app.use('/login', userRouter); // Login route (or other routes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
