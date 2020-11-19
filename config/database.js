const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:abc1234@cluster0.dhvwu.mongodb.net/moviedex?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// shortcut to mongoose.connection
const db = mongoose.connection

db.on('connected', function() {
    console.log(`connected to mongoDB at ${db.host}:${db.port}`)
})