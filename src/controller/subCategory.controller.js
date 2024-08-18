const SubCategory = require('../models/subCategory.model')
const ApiResponse = require("../utils/ApiResponse")
const asyncHandler = require("../utils/asyncHandler")

// Create a Sub-Category
const createSubCategory = asyncHandler(async (req, res) => {
    try {
        const subCategory = new SubCategory(req.body);
        await subCategory.save();
        return res.status(200).json(new ApiResponse(200, subCategory, "subCategory created successfully"))

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all Sub-Categories
const getSubCategories = asyncHandler(async (req, res) => {
    try {
        const subCategories = await SubCategory.find();
        return res.status(200).json(new ApiResponse(200, subCategories, " subCategory received successfully"))

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all Sub-Categories under a Category
const getSubCategoriesByCategory = asyncHandler(async (req, res) => {
    try {
        const subCategories = await SubCategory.find({ category: req.query.categoryId });
        console.log("vvvvvvv", subCategories)
        return res.status(200).json(new ApiResponse(200, subCategories, "received subCategory of perticular category "))

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get a Sub-Category by ID or Name
const getSubCategory = asyncHandler(async (req, res) => {
    try {
        const subCategory = await SubCategory.findOne({ $or: [{ _id: req.query.id }, { name: req.query.name }] });
        if (!subCategory) return res.status(404).json({ message: 'Sub-Category not found' });
        return res.status(200).json(new ApiResponse(200, subCategory, "getting subCategory by their name or id"))

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Edit Sub-Category
const editSubCategory = asyncHandler(async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndUpdate(req.query.id, req.body, { new: true });
        return res.status(200).json(new ApiResponse(200, subCategory, "record updated successfully"))

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = { createSubCategory, getSubCategories, getSubCategoriesByCategory, getSubCategory, editSubCategory };
