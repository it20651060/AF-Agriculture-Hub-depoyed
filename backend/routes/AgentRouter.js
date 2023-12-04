const router = require("express").Router(); //import router function in express package
let AgentModel = require("../models/AgentModel");
const bcrypt = require("bcrypt");

//Add Admin (http://localhost:8070/admin/add)
router.route("/add").post((req, res) => {
  //get data from frontend via request

  // get request body data and assining them to variables
  const email = req.body.email;
  const password = req.body.password;

  const newAgentModel = new AgentModel({
    email,
    password,
  });

  //pass the variables to database
  newAgentModel
    .save()
    .then(() => {
      res.json("agent added succecfull");
    })
    .catch((err) => {
      console.log(err); //catch errors
    });
});

// LOGIN route
router.route("/login").post(async (req, res) => {
  //   const { email, password } = req.body;

  const email = req.body.email;
  const password = req.body.password;

  try {
    // Find the agent with the provided email
    const agent = await AgentModel.findOne({ email });

    if (!agent) {
      // No agent found with the provided email
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const passwordMatch = await bcrypt.compare(password, agent.password);

    if (password == agent.password) {
      // Passwords match, login successful
      return res.status(200).json({ message: "Login successful" });
    } else {
      // Passwords do not match
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
});

//GET ALL Agent DETAILS (http://localhost:8070/agent/)
router.route("/").get((req, res) => {
  AgentModel.find()
    .then((agent) => {
      res.json(agent); //pass data from db to frontend
    })
    .catch((err) => {
      console.log(err); //display errors
    });
});

//UPDATE ONE agent DETAILS (http://localhost:8070/agent/update/<userID>)
router.route("/update/:id").put(async (req, res) => {
  // get data from frontend via request. async function is used to increase the performance

  let sampleId = req.params.id; //fetch the id parameter in url
  //destructuring
  const { email, password } = req.body; //fetch data from frontend

  const updateSample = {
    //create update object and pass values getting from frontend
    email,
    password,
  };

  const update = await AgentModel.findByIdAndUpdate(sampleId, updateSample) //pass two parameters(userid,object that store  data) and find user by id and update relevent data
    .then(() => {
      res.status(200).send({ status: "sample updated" }); //if update success, display success message
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" }); //if not display error message
    });
});

module.exports = router;
