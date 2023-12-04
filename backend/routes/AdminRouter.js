
const router = require("express").Router(); //import router function in express package
let AdminModel = require("../models/AdminModel");

//Add Admin (http://localhost:8070/admin/add)
router.route("/add").post((req, res) => {  //get data from frontend via request

    // get request body data and assining them to variables
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const contactNumber = Number(req.body.contactNumber);
    const address = req.body.address;
    const email = req.body.email;
    const dateOfBirth = req.body.dateOfBirth;
    const nic = req.body.nic;
    const gender = req.body.gender;


    const newAdminModel = new AdminModel({
        firstName,
        lastName,
        contactNumber,
        address,
        email,
        dateOfBirth,
        nic,
        gender
    })

    //pass the variables to database
    newAdminModel.save().then(() => {
        res.json("admin added succecfull")
    }).catch((err) => {
        console.log(err); //catch errors
    })
})

//GET ALL admin DETAILS (http://localhost:8070/admin/)
router.route("/").get((req, res) => {

    AdminModel.find().then((admin) => {
        res.json(admin) //pass data from db to frontend
    }).catch((err) => {
        console.log(err) //display errors
    })

})

//UPDATE ONE admin DETAILS (http://localhost:8070/admin/update/<userID>)
router.route("/update/:id").put(async (req, res) => { // get data from frontend via request. async function is used to increase the performance 
    
    let sampleId = req.params.id; //fetch the id parameter in url
    //destructuring
    const { firstName, lastName, contactNumber, address, email, dateOfBirth, nic, gender } = req.body; //fetch data from frontend

    const updateSample = { //create update object and pass values getting from frontend
        firstName,
        lastName,
        contactNumber,
        address,
        email,
        dateOfBirth,
        nic,
        gender
    }

    const update = await AdminModel.findByIdAndUpdate(sampleId, updateSample) //pass two parameters(userid,object that store  data) and find user by id and update relevent data
        .then(() => {
            res.status(200).send({ status: "sample updated" }) //if update success, display success message
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data" }); //if not display error message
        })

})

//DELETE SAMPLE (http://localhost:8070/admin/delete/<userID>)
router.route("/delete/:id").delete(async (req, res) => { //get userid from frontend
    let sampleId = req.params.id; // assign userid to variable

    await AdminModel.findByIdAndDelete(sampleId) //delete data that related to packId
        .then(() => {
            res.status(200).send({ status: "sample deleted" }); //display user deleted successfull
        }).catch((err) => {
            console.log(err.message)
            res.status(500).send({ status: "Error with delete user", error: err.message }); //display error message
        })
})







module.exports = router;