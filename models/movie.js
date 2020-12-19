const mongoose = require('mongoose')
// const movies = require('../controllers/movies')

// compile schema into a model and export it


const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    release: Number,
    rating: String,
    cast: [String],
})


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
module.exports = mongoose.model('Movie', movieSchema)
// module.exports = mongoose.model('movie', movieSchema)
// shortcut to the mongoose.schema class