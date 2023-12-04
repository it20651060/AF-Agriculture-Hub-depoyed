const mongoose = require("mongoose"); // import mongoose package

const Schema = mongoose.Schema; // create schema

const NewsModelSchema = new Schema({
  //assign values to schema

  postDate: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  news: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: false,
  },
});

const NewsModel = mongoose.model("news_model", NewsModelSchema);
// passing two parameters, tablename(document) & schemaname

module.exports = NewsModel; //export add blood samples
