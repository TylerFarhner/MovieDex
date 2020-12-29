// const movie = require('../models/movie');
const Movie = require('../models/movie')

function newMovie(req, res) {
  res.render('movies/new')
}

function create(req, res) {
  Movie.create(req.body, function(err, movies) {
    console.log(err, movies)
    res.redirect('/movies')
  })
}


function index(req, res) {
  // get all movies from DB then send to index view

  // empty brackets (below) shows everything
  Movie.find({}, function (err, movies) {
    res.render('movies/index', {
      movies
      // really movies: movies -- thankyou es6
    })
  })
}

function show(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
          res.render('movies/show', { movie });
  });
}


function deleteMovie(req, res) {
  Movie.findByIdAndDelete(req.params.id, function (err, movie) {
    res.redirect('/movies')
  })
}



module.exports = {
  index,
  show,
  new: newMovie,
  create,
  delete: deleteMovie,
}