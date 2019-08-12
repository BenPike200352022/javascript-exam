// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const bankAccountRoutes = require('./routes/bankAccounts');

// Registering our pageRoutes
// app.use('/', pageRoutes);
app.use('/bankAccounts', bankAccountRoutes);

// Exporting the changes
module.exports = app;