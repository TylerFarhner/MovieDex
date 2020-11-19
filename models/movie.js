const mongoose = require('mongoose')

// shortcut to the mongoose.schema class
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: String,
    release: Number,
    rating: String,
    cast: [String]
})

// compile schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema)