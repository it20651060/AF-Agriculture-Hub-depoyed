const mongoose = require("mongoose"); // import mongoose package

const Schema = mongoose.Schema; // create schema

const SmallScaleFarmerModelSchema = new Schema({
  //assign values to schema

  initialName: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
  },
  villageDomain: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  farmerType: {
    type: String,
    required: true,
  },
});

const SSFarmerModel = mongoose.model(
  "small_scale_farmers",
  SmallScaleFarmerModelSchema
);
// passing two parameters, tablename(document) & schemaname

module.exports = SSFarmerModel; //export add blood samples
