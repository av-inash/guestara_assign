const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
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

    baseAmount: {
        type: Number,
        required: true

    },

    discount: {
        type: Number,
        default: 0

    },

    totalAmount: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'

    },

    subCategory: {
        type: mongoose.Schema.Types.ObjectId
        ,
        ref: 'SubCategory'

    },

});

module.exports = mongoose.model('Item', ItemSchema);
