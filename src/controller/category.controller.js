const Category = require('../models/category.model');
const asyncHandler = require("../utils/asyncHandler")

const ApiResponse = require("../utils/ApiResponse")


const createCategory = asyncHandler(async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        return res.status(200).json(new ApiResponse(200, category, "Category is created successfully"))
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
});

// Get all Categories
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        return res.status(200).json(new ApiResponse(200, categories))

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

// Get a Category by ID or Name
const getCategory = async (req, res) => {
    try {
        const category = await Category.findOne({ $or: [{ _id: req.query.id }, { name: req.query.name }] });
        if (!category) return res.status(404).json({ message: 'Category not found' });
        return res.status(200).json(new ApiResponse(200, category, "received category successfully"))

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Edit Category
const editCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.query.id, req.body, { new: true });
        return res.status(200).json(new ApiResponse(200, category))

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createCategory, getCategories, getCategory, editCategory };
