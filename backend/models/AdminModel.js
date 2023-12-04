const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const AdminModelSchema = new Schema({  //assign values to schema


    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    }
})

const adminmodel = mongoose.model("adminmodel", AdminModelSchema);
 // passing two parameters, tablename(document) & schemaname

 module.exports = adminmodel; //export add blood samples