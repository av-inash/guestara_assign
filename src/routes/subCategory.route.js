const express = require('express');
const { createSubCategory, getSubCategories, getSubCategoriesByCategory, getSubCategory, editSubCategory } = require('../controller/subCategory.controller');

const router = express.Router();

router.post('/subcategories', createSubCategory);
router.get('/subcategories', getSubCategories);
router.get('/categories/categoryId/subcategories', getSubCategoriesByCategory);
router.get('/subcategory-id', getSubCategory);
router.get('/subcategory-name', getSubCategory);
router.put('/subcategory-id', editSubCategory);


module.exports = router;
