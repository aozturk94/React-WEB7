const express = require('express');
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const LibraryModel = require('./models/Library');

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://aozturk94:up.close23@cluster0.3ljkb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")


app.get("/getBooks", (req, res) => {
    LibraryModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
});

app.listen(3053, () => {
    console.log("SERVER IS RUNNING!");
});
