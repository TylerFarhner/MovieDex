const mongoose = require('mongoose')
// const movies = require('../controllers/movies')

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

function getAll() {
    return movies
}

function getOne(id) {
    return movies[id]
}

module.exports = {
    getAll,
    getOne
}