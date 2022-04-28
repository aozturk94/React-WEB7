const express = require('express');
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeesModel = require('./models/Employees');

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://aozturk94:up.close23@cluster0.tvdkf.mongodb.net/oglenFullStack?retryWrites=true&w=majority")


app.get("/getEmployees", (req, res) => {
    EmployeesModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.post("/createEmployee", async (req, res) => {
    const employee = req.body
    const newEmployee = new EmployeesModel(employee)
    await newEmployee.save()
    res.json(employee)
});

app.put("/updateEmployee", async (req, res) => {
    const newName = req.body.newName;
    const newAge = req.body.newAge;
    const id = req.body.id;

    try {
        await EmployeesModel.findById(id, (error, updatedEmployee) => {
            updatedEmployee.name = newName;
            updatedEmployee.age = newAge;
            updatedEmployee.save();
        });
    } catch (error) {
        console.log(error);
    }
    res.json("updated")
});

app.delete("/deleteEmployee/:id", async (req, res) => {
    const id = req.params.id;

    await EmployeesModel.findByIdAndRemove(id).exec();
    res.send("deleted");
})

app.listen(3050, () => {
    console.log("SERVER IS RUNNING!");
})
