const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    year: { type: Number, required: true, min: 1000, max: new Date().getFullYear() }
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
