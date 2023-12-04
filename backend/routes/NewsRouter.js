const router = require("express").Router(); //import router function in express package
let NewsModel = require("../models/NewsModel");

//Add News (http://localhost:8070/news/add)
router.route("/add").post((req, res) => {
  //get data from frontend via request

  // get request body data and assining them to variables
  const postDate = req.body.postDate;
  const title = req.body.title;
  const news = req.body.news;
  const comments = req.body.comments;

  const newNewsModel = new NewsModel({
    postDate,
    title,
    news,
    comments,
  });

  //pass the variables to database
  newNewsModel
    .save()
    .then(() => {
      res.json("news post succecfull");
    })
    .catch((err) => {
      console.log(err); //catch errors
    });
});

//GET ALL News DETAILS (http://localhost:8070/news/)
router.route("/").get((req, res) => {
  NewsModel.find()
    .then((news) => {
      res.json(news); //pass data from db to frontend
    })
    .catch((err) => {
      console.log(err); //display errors
    });
});

//UPDATE ONE News DETAILS (http://localhost:8070/news/update/<userID>)
router.route("/update/:id").put(async (req, res) => {
  // get data from frontend via request. async function is used to increase the performance

  let sampleId = req.params.id; //fetch the id parameter in url
  //destructuring
  const { postDate, title, news, comments } = req.body; //fetch data from frontend

  const updateSample = {
    //create update object and pass values getting from frontend
    postDate,
    title,
    news,
    comments,
  };

  const update = await NewsModel.findByIdAndUpdate(sampleId, updateSample) //pass two parameters(userid,object that store  data) and find user by id and update relevent data
    .then(() => {
      res.status(200).send({ status: "News updated" }); //if update success, display success message
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating News" }); //if not display error message
    });
});

//DELETE News (http://localhost:8070/news/delete/<userID>)
router.route("/delete/:id").delete(async (req, res) => {
  //get userid from frontend
  let sampleId = req.params.id; // assign userid to variable

  await NewsModel.findByIdAndDelete(sampleId) //delete data that related to packId
    .then(() => {
      res.status(200).send({ status: "news deleted" }); //display user deleted successfull
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete news", error: err.message }); //display error message
    });
});

module.exports = router;
