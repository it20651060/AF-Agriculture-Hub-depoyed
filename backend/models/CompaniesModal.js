const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const CompanyModelSchema = new Schema({  //assign values to schema

    cName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    regDate: {
        type: String,
        required: true,
    },
    expDate: {
        type: String,
        required: true,
    }

})

const companymodel = mongoose.model("companymodel", CompanyModelSchema);
// passing two parameters, tablename(document) & schemaname

module.exports = companymodel; //export add blood samples