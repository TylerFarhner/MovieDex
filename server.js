// Require modules
const express = require('express')
const morgan = require('morgan')
const indexRouter = require('./routes/index')
const moviesRouter = require('./routes/movies')
// have to req. when changing from config/database
const mongoose = require('mongoose')

// set up the express app
const app = express()

// .env configuration
require('dotenv').config()
const port = process.env.port || 3000;
const MONGODB_URI = process.env.MONGODB_URI

// connect to DB

// require('./config/database')
const db = mongoose.connection;
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

// lets us know we're connected to the DB (err/success minus the err)
db.on('connected', function () {
    console.log(`connected to mongoDB at ${db.host}:${db.port}`)
})

// configure the app with app.set()
app.set('view engine', 'ejs')

// mount middleware with app.use
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: false
}))

// mount our routes with app.use()
app.use('/', indexRouter)
app.use('/movies', moviesRouter)

// tell app to listen
app.listen(port, function () {
    console.log(`Express is listening on port:${port}`)
})