const mongoose = require('mongoose'); // import mongoose package

const Schema = mongoose.Schema; // create schema

const ProductModelSchema = new Schema({  //assign values to schema

    pName: {
        type: String,
        required: true,
    },
    pPrice: {
        type: Number,
        required: true,
    },
    qantity:{
        type: Number,
        required:true,
    }, 
    details: {
        type: String,
        required: true,
    },
    images: {
        type: String,
        required: true,
    }
})

const products = mongoose.model("products", ProductModelSchema);
// passing two parameters, tablename(document) & schemaname

module.exports = products; //export add blood samples