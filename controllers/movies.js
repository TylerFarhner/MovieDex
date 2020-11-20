const Movie = require('../models/movie')
//  ^^ Forgot this guy

module.exports = {
    new: newMovie,
    create,
    index,
    Movie
    // ^^ this too :)
}

function newMovie(req, res) {
    res.render('movies/new')
}

function create(req, res) {
    // remove whitespace next to commas
    req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
    // split if it's not an empty string
    if (req.body.cast) req.body.cast = req.body.cast.split(',');
    
    const movie = new Movie(req.body);
  
    movie.save(function(err) {
      // one way to handle errors
      if (err) return res.render('movies/new');
      console.log(movie);
      // for now, redirect right back to new.ejs
      res.redirect('/movies/new');
    });
  }


  function index(req, res) {
    // get all movies from DB then send to index view
    Movie.find({}, function(err, movies) {
      res.render('movies/index', {
        movies
      })
    })
  }