const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    name: {
        type: String
    },
    description: {
        type: String,
        default: "This is a test"
    }
});

module.exports = mongoose.model('Category', categorySchema);