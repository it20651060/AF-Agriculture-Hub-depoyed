const router = require("express").Router(); //import router function in express package
let UserModal = require("../models/UserModel");
const bcrypt = require("bcrypt");

//Add Admin (http://localhost:8070/admin/add)
router.route("/add").post((req, res) => {
  //get data from frontend via request

  // get request body data and assining them to variables
  const email = req.body.email;
  const password = req.body.password;

  const newUserModal = new UserModal({
    email,
    password,
  });

  //pass the variables to database
  newUserModal
    .save()
    .then(() => {
      res.json("Admin added succecfull");
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
    const user = await UserModal.findOne({ email });

    if (!user) {
      // No agent found with the provided email
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (password == user.password) {
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




module.exports = router;
