const router = require("express").Router(); //import router function in express package
let AgriRulesModel = require("../models/AgriRulesModel");

//Add agri rules (http://localhost:8070/agrirule/add)
router.route("/add").post((req, res) => {  //get data from frontend via request

    // get request body data and assining them to variables
    const rName = req.body.rName;
    const rCategry = req.body.rCategry;
    const date = req.body.date;
    const rDetails = req.body.rDetails;

    const newAgriModel = new AgriRulesModel({
        rName,
        rCategry,
        date,
        rDetails
    })

    //pass the variables to database
    newAgriModel.save().then(() => {
        res.json("Agri Rules Added succecfull")
    }).catch((err) => {
        console.log(err); //catch errors
    })
})

//GET ALL agri rules DETAILS (http://localhost:8070/agrirule/)
router.route("/").get((req, res) => {

    AgriRulesModel.find().then((admin) => {
        res.json(admin) //pass data from db to frontend
    }).catch((err) => {
        console.log(err) //display errors
    })

})

//UPDATE ONE agri rule DETAILS (http://localhost:8070/agrirule/update/<userID>)
router.route("/update/:id").put(async (req, res) => { // get data from frontend via request. async function is used to increase the performance 

    let sampleId = req.params.id; //fetch the id parameter in url
    //destructuring
    const { rName, rCategry, date, rDetails } = req.body; //fetch data from frontend

    const updateSample = { //create update object and pass values getting from frontend
        rName,
        rCategry,
        date,
        rDetails
    }

    const update = await AgriRulesModel.findByIdAndUpdate(sampleId, updateSample) //pass two parameters(userid,object that store  data) and find user by id and update relevent data
        .then(() => {
            res.status(200).send({ status: "sample updated" }) //if update success, display success message
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data" }); //if not display error message
        })

})

//DELETE SAMPLE (http://localhost:8070/agrirule/delete/<userID>)
router.route("/delete/:id").delete(async (req, res) => { //get userid from frontend
    let sampleId = req.params.id; // assign userid to variable

    await AgriRulesModel.findByIdAndDelete(sampleId) //delete data that related to packId
        .then(() => {
            res.status(200).send({ status: "sample deleted" }); //display user deleted successfull
        }).catch((err) => {
            console.log(err.message)
            res.status(500).send({ status: "Error with delete user", error: err.message }); //display error message
        })
})


module.exports = router;