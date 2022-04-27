const mongoose = require('mongoose');

const EmployeesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type:  String,
        required: true
    },
    img: {
        type: String,
        required: false
    }
})

const EmployeesModel = mongoose.model("employees",EmployeesSchema)
module.exports = EmployeesModel