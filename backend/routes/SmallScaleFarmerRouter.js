const router = require("express").Router(); //import router function in express package
let SSFarmerModel = require("../models/SmallScaleFarmerModel");

//Add Farmer (http://localhost:8070/farmers/add)
router.route("/add").post((req, res) => {
  //get data from frontend via request

  // get request body data and assining them to variables
  const initialName = req.body.initialName;
  const nic = req.body.nic;
  const dob = req.body.dob;
  const email = req.body.email;
  const contactNo = Number(req.body.contactNo);
  const villageDomain = req.body.villageDomain;
  const address = req.body.address;
  const farmerType = req.body.farmerType;

  const newSSFarmerModel = new SSFarmerModel({
    initialName,
    nic,
    dob,
    email,
    contactNo,
    villageDomain,
    address,
    farmerType,
  });

  //pass the variables to database
  newSSFarmerModel
    .save()
    .then(() => {
      res.json("farmer added succecfull");
    })
    .catch((err) => {
      console.log(err); //catch errors
    });
});

//GET ALL farmers DETAILS (http://localhost:8070/farmers/)
router.route("/").get((req, res) => {
  SSFarmerModel.find()
    .then((farmer) => {
      res.json(farmer); //pass data from db to frontend
    })
    .catch((err) => {
      console.log(err); //display errors
    });
});

//UPDATE ONE farmer DETAILS (http://localhost:8070/farmers/update/<userID>)
router.route("/update/:id").put(async (req, res) => {
  // get data from frontend via request. async function is used to increase the performance

  let sampleId = req.params.id; //fetch the id parameter in url
  //destructuring
  const {
    initialName,
    nic,
    dob,
    email,
    contactNo,
    villageDomain,
    address,
    farmerType,
  } = req.body; //fetch data from frontend

  const updateSample = {
    //create update object and pass values getting from frontend
    initialName,
    nic,
    dob,
    email,
    contactNo,
    villageDomain,
    address,
    farmerType,
  };

  const update = await SSFarmerModel.findByIdAndUpdate(sampleId, updateSample) //pass two parameters(userid,object that store  data) and find user by id and update relevent data
    .then(() => {
      res.status(200).send({ status: "sample updated" }); //if update success, display success message
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" }); //if not display error message
    });
});

//DELETE SAMPLE (http://localhost:8070/farmers/delete/<userID>)
router.route("/delete/:id").delete(async (req, res) => {
  //get userid from frontend
  let sampleId = req.params.id; // assign userid to variable

  await SSFarmerModel.findByIdAndDelete(sampleId) //delete data that related to packId
    .then(() => {
      res.status(200).send({ status: "sample deleted" }); //display user deleted successfull
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message }); //display error message
    });
});

module.exports = router;
