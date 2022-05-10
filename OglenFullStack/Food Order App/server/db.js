const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://aozturk94:up.close23@cluster0.g7uw7.mongodb.net/Food-App?retryWrites=true&w=majority");

var db = mongoose.connection

db.on('connected', () => {
    console.log('Mongo connection success')
})

db.on('error', () => {
    console.log('Mongo connection fail')
})

module.exports = mongoose;