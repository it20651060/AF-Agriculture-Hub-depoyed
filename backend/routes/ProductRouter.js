const router = require("express").Router(); //import router function in express package
let ProductModel = require("../models/ProductModel");


//Add agri rules (http://localhost:8070/product/add)
router.route("/add").post((req, res) => {  //get data from frontend via request

    // get request body data and assining them to variables
    const pName = req.body.pName;
    const pPrice = req.body.pPrice;
    const qantity = req.body.qantity;
    const details = req.body.details;
    const images = req.body.images;

    const newProModel = new ProductModel({
        pName,
        pPrice,
        qantity,
        details,
        images
    })

    //pass the variables to database
    newProModel.save().then(() => {
        res.json("Product Added succecfull")
    }).catch((err) => {
        console.log(err); //catch errors
    })
})

//GET ALL agri rules DETAILS (http://localhost:8070/agrirule/)
router.route("/").get((req, res) => {

    ProductModel.find().then((admin) => {
        res.json(admin) //pass data from db to frontend
    }).catch((err) => {
        console.log(err) //display errors
    })

})


//DELETE SAMPLE (http://localhost:8070/admin/delete/<userID>)
router.route("/delete/:id").delete(async (req, res) => { //get userid from frontend
    let sampleId = req.params.id; // assign userid to variable

    await ProductModel.findByIdAndDelete(sampleId) //delete data that related to packId
        .then(() => {
            res.status(200).send({ status: "sample deleted" }); //display user deleted successfull
        }).catch((err) => {
            console.log(err.message)
            res.status(500).send({ status: "Error with delete user", error: err.message }); //display error message
        })
})


module.exports = router;