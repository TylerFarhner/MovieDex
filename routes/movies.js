const express = require('express')
const router = express.Router()
const moviesCtrl = require('../controllers/movies')

// get /movies/new
router.get('/new', moviesCtrl.new)
// add a new resource
router.post('/', moviesCtrl.create)
// see all the resources
router.get('/', moviesCtrl.index)
router.delete('/:id', moviesCtrl.delete)

module.exports = router