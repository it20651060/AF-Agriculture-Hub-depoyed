const mongoose = require("mongoose"); // import mongoose package

const Schema = mongoose.Schema; // create schema

const FarmerProductModelSchema = new Schema({
  //assign values to schema

  pName: {
    type: String,
    required: true,
  },
  pPrice: {
    type: Number,
    required: true,
  },
  qantity: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
});

const products = mongoose.model("Farmer_products", FarmerProductModelSchema);
// passing two parameters, tablename(document) & schemaname

module.exports = products; //export add blood samples
