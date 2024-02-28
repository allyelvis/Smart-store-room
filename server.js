// server.js (Entry point)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/products', require('./routes/products')); // Product-related routes
app.use('/transactions', require('./routes/transactions')); // Sales and purchases
// Add more routes as needed

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
