const express = require("express");
const FoodModel = require("./models/FoodModel");
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://aozturk94:up.close23@cluster0.g7uw7.mongodb.net/Food-App?retryWrites=true&w=majority");
app.use(express.json());
app.use(cors());

app.get('/getfoods', (req, res)=> {
    FoodModel.find({}, (err,result)=>{
        if (err) {
            res.send(err);
        }
        else{
            res.send(result)
        }
    })
})

app.listen(3030, () =>{
    console.log("Server is running!");
});