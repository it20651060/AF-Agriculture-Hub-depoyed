const mongoose = require("mongoose"); // import mongoose package

const Schema = mongoose.Schema; // create schema

const AgentModelSchema = new Schema({
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

const agentModel = mongoose.model("agent_model", AgentModelSchema);
// passing two parameters, tablename(document) & schemaname

module.exports = agentModel; //export add blood samples
