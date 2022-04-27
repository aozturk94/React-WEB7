const express = require('express');
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeesModel = require('./models/Employees');

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://aozturk94:up.close23@cluster0.tvdkf.mongodb.net/oglenFullStack?retryWrites=true&w=majority")


app.get("/getEmployees", (req, res)=>{
    EmployeesModel.find({}, (err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

app.post("/createEmployee", async(req, res) =>{
    const employee = req.body
    const newEmployee = new EmployeesModel(employee)
    await newEmployee.save()
    res.json(employee)
    })


app.listen(3050, () => {
    console.log("SERVER IS RUNNING!");
})
