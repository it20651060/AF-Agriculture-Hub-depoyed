const mongoose = require("mongoose"); // import mongoose package

const Schema = mongoose.Schema; // create schema

const UserModelSchema = new Schema({
  //assign values to schema

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModal = mongoose.model("UserModal", UserModelSchema);
// passing two parameters, tablename(document) & schemaname

module.exports = UserModal; //export add blood samples
