const Item = require('../models/item.controller');
const ApiResponse = require("../utils/ApiResponse")
const asyncHandler = require("../utils/asyncHandler")


// Create an Item
const createItem = asyncHandler(async (req, res) => {
    try {
        const item = new Item(req.body);
        item.totalAmount = item.baseAmount - item.discount;
        await item.save();
        return res.status(200).json(new ApiResponse(200, item, "item created successfully"))

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all Items
const getItems = asyncHandler(async (req, res) => {
    try {
        const items = await Item.find();
        return res.status(200).json(new ApiResponse(200, items, "received items successfully"))

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all Items under a Category
const getItemsByCategory = asyncHandler(async (req, res) => {
    try {
        const items = await Item.find({ category: req.query.categoryId });
        return res.status(200).json(new ApiResponse(200, items, 'items get successfully'))

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all Items under a Sub-Category
const getItemsBySubCategory = asyncHandler(async (req, res) => {
    try {
        const items = await Item.find({ subCategory: req.query.subCategoryId });
        return res.status(200).json(new ApiResponse(200, items, " getting item of subCategory successfully"))

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get an Item by ID or Name
const getItem = asyncHandler(async (req, res) => {
    try {
        const item = await Item.findOne({ $or: [{ _id: req.query.id }, { name: req.query.name }] });
        if (!item) return res.status(404).json({ message: 'Item not found' });
        return res.status(200).json(new ApiResponse(200, item, "getting item by name or id"))

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Edit Item
const editItem = asyncHandler(async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.query.id, req.body, { new: true });
        item.totalAmount = item.baseAmount - item.discount;
        await item.save();
        return res.status(200).json(new ApiResponse(200, item, 'updated record successfully'))

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Search Item by Name
const searchItemByName = asyncHandler(async (req, res) => {
    try {
        const items = await Item.find({ name: new RegExp(req.query.name, 'i') });
        return res.status(200).json(new ApiResponse(200, items))

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = { createItem, getItems, getItemsByCategory, getItemsBySubCategory, getItem, editItem, searchItemByName };
