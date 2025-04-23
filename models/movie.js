const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    director: { type: String, required: true, trim: true },
    year: { type: Number, required: true, min: 1888, max: new Date().getFullYear() },
    genre: { type: String, required: true, trim: true }
}, { timestamps: true });

module.exports = mongoose.model("Movie", movieSchema);
