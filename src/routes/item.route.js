const express = require('express');
const { createItem, getItems, getItemsByCategory, getItemsBySubCategory, getItem, editItem, searchItemByName } = require('../controller/item.controller');

const router = express.Router();

router.post('/items', createItem);
router.get('/items', getItems);
router.get('/categories/categoryId/items', getItemsByCategory);
router.get('/subcategories/subcategoryId/items', getItemsBySubCategory);
router.get('/items-id', getItem);
router.get('/items-name', getItem);
router.put('/items-id', editItem);
router.get('/items/search/name', searchItemByName);


module.exports = router;
