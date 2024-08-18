const express = require("express")
const app = express()

const categoryRoutes = require('./routes/category.route');
const subCategoryRoutes = require('./routes/subCategory.route');
const itemRoutes = require('./routes/item.route');


// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/api', categoryRoutes);
app.use('/api', subCategoryRoutes);
app.use('/api', itemRoutes);

module.exports = app;
