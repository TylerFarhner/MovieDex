// const movie = require('../models/movie');
const Movie = require('../models/movie')
// import { getOne } from '../models/movie'
//  ^^ Forgot this guy



// function create(req, res) {
//   // remove whitespace next to commas
//   req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
//   // split if it's not an empty string
//   if (req.body.cast) req.body.cast = req.body.cast.split(',');

//   const movie = new Movie(req.body);

//   movie.save(function (err) {
//     // one way to handle errors
//     if (err) return res.render('movies/new');
//     console.log(movie);
//     // for now, redirect right back to new.ejs
//     res.redirect('/movies');
//   });
// }

// function index(req, res) {
//   Movie.find({}, function(err, movies) {
//     res.render('movies/index', { movies })
//   })
// }

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

// function show(req, res) {
//   Movie.getOne({}, function(err, movies) {
//     res.render('movies/show', )
//   })
// }

// function show(req, res) {
//   console.log(req.params.id)
//   res.render('movies/show', {
//     movie: Movie.getOne(req.params.id)
//   })
// }

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
  // Movie,
  delete: deleteMovie,
  // ^^ this too :)
}