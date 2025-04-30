const express = require("express");
const route = express.Router();
const jwt = require("jsonwebtoken");
const secret_key = "qwertyuiopaasdfghjklzxcvbnmasdfghjkl";
const verifyToken = require("../middleware/verifyToken")
var User = require("../model/signupSchema");

route.get("/getLoggedData", verifyToken, (req, res) => {
  res.send({
    ok: true,
    results: req.userdata,
  });
}); //http://localhost:1010/api/users/getLoggedData

route.post("/signup", (req, res) => {
  const newuser = req.body;
  // console.log(newuser)
  User.insertOne(newuser)
    .then((data) => {
      // console.log(data)
      res.send({
        ok: true,
        message: "User created",
        results: data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        ok: false,
        results: "Fsiled to create user",
      });
    });
}); //http://localhost:1010/api/users/signup

route.post("/signin", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((data) => {
      const token = jwt.sign({ data }, secret_key);

      if (!data) {
        res.send({
          ok: false,
          message: "user invailed",
          results: null,
        });
      } else {
        res.send({
          ok: true,
          message: "user vailed",
          results: data,
          authToken: token,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.send({
        ok: false,
        message: "Wrong user",
        results: null,
      });
    });
}); //http://localhost:1010/api/users/signin

route.delete("/delete/:_id", (req, res) => {
  User.deleteOne(req.params)
    .then((data) => {
      res.send({ ok: true, results: "Successfully deleted", data: data });
    })
    .catch((error) => {
      res.send({ ok: false, results: "Something went wrong", error: error });
    });
});

// Update user details by ID
route.put("/update/:_id", (req, res) => {
  const userId = req.params._id; // Access _id correctly
  const updateData = req.body;

  User.updateOne({ _id: userId }, updateData) // Fix the filter here
    .then((success) => {
      res.send({
        ok: true,
        results: success,
      });
    })
    .catch((error) => {
      res.send({
        ok: false,
        results: error,
      });
    });
}); // http://localhost:1010/api/users/update/:_id

// Get user data by ID
route.get("/getdata/:_id", (req, res) => {
  // Get the user ID from the URL parameter
  const userId = req.params;

  // Use `findById` to find a user by their ID
  User.findById(userId)
    .then((data) => {
      res.send({
        ok: true,
        results: data,
      });
    })
    .catch((error) => {
      res.send({
        ok: false,
        results: error,
      });
    });
}); // http://localhost:1010/api/users/getdata/:_id


route.get("/get-all",verifyToken,async(req,res)=>{
  try {
    const getUsers = await User.find({_id: {$ne: req.userdata.data._id}})
    res.status(200).json({
      message:'Users fetched succussfully',
      getUsers
    })
  } catch (error) {
    res.status(500).json({
      message:'Something went wrong'
    })
  }
})//http://localhost:1010/api/users/get-all

module.exports = route;
