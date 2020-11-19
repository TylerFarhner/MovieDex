// Require modules
const express = require('express')
const morgan = require('morgan')
const port = 3000
const indexRouter = require('./routes/index')
const moviesRouter = require('./routes/movies')

// set up the express app
const app = express()

// connect to DB
require('./config/database')

// configure the app with app.set()
app.set('view engine', 'ejs')

// mount middleware with app.use
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}))

// mount our routes with app.use()
app.use('/', indexRouter)
app.use('/movies', moviesRouter)

// tell app to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`)
})