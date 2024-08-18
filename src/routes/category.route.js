const express = require('express');
const { createCategory, getCategories, getCategory, editCategory } = require('../controller/category.controller');

const router = express.Router();

router.post('/create-category', createCategory);
router.get('/all-categories', getCategories);
router.get('/category-id-name', getCategory);
// router.get('/category/name/:name', getCategory);
router.put('/category-edit-id', editCategory);

module.exports = router;
