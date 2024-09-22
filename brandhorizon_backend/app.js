const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // Importing user routes

// Load environment variables
// dotenv.config();
//
// // Connect to MongoDB
// connectDB();
//
// const app = express();
//
// // Middleware to parse JSON requests
// app.use(express.json());
//
// // Basic route
// app.get('/', (req, res) => {
//   res.send('API is running...');
//   });
//
//   // Use the user routes
//   app.use('/api/users', userRoutes);
//
//   // Define the port to run the server
//   const PORT = process.env.PORT || 5000;
//
//   // Start the server
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//     });
//
