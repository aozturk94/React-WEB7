const mongoose = require('mongoose');

const LibrarySchema = new mongoose.Schema({
    isbn: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    img: {
        type:  String,
        required: true
    },
    publisher: {
        type: String,
        required: false
    },
    publishdate: {
        type: String,
        required: false
    },
    numberofpage: {
        type: Number,
        required: false
    }
})

const LibraryModel = mongoose.model("Library", LibrarySchema)
module.exports = LibraryModel