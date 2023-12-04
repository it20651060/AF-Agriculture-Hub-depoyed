const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const AgriRulesModelSchema = new Schema({  //assign values to schema

    rName: {
        type: String,
        required: true,
    },
    rCategry: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    rDetails: {
        type: String,
        required: true,
    }
})

const agrirules = mongoose.model("agrirules", AgriRulesModelSchema);
// passing two parameters, tablename(document) & schemaname

module.exports = agrirules; //export add blood samples