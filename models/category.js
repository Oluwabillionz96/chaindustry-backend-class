const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String,
        default: "This is a test"
    }
});

module.exports = mongoose.model('Category', CategorySchema);