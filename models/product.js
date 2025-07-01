const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    },
    name: {
        type: String
    },
    description: {
        type: String,
        default: "This is a test"
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number,
        default: 0
    },
    slug: [
        {type: String}
    ]
});

module.exports = mongoose.model('Product', ProductSchema);