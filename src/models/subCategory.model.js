const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },

    description: {
        type: String
    },

    taxApplicability: {
        type: Boolean,
        default: false
    },
    tax: {
        type: Number,
        default: 0

    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'

    },

});

module.exports = mongoose.model('SubCategory', SubCategorySchema);
