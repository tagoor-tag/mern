var express = require('express')
var route = express.Router();
var createConnection = require('../config/connection');
const { error } = require('console');

route.get("/getdata", async (req, res)=>{
    const productsColl = await createConnection();

  productsColl
    .find({})
    .toArray()
    .then((data) => {
      res.json({
        ok: true,
        results: data,
      });
    })
    .catch((error) => {
      res.json({
        ok: false,
        result: "Something went wrong while accessing the data",
      });
    });
})//http://localhost:1515/users/getdata

route.post("/postdata", async (req, res) => {
    const newUser = req.body;  // Conventionally, it's camelCase for variables

    try {
        const productsColl = await createConnection();  // Assuming createConnection() is async

        // Insert the new user into the database
        const data = await productsColl.insertOne(newUser);

        res.status(201).json({
            ok: true,
            message: "User inserted",
            results: data,
        });
    } catch (error) {
        // Log the error internally (for server-side debugging)
        console.error(error);

        res.status(500).json({
            ok: false,
            message: "User not inserted. Internal server error.",
            results: error.message,  // Just sending the error message, not the full object
        });
    }
});
//http://localhost:1515/users/postdata

module.exports = route ;
