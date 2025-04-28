const { log, error } = require("console");
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const port = 8989;
const app = express();


//configuration
app.use(cors());
app.use(express.json());

app.get("/getdata", (req, res) => {
    //connect with the mongodb sever
    client.then((resp) => {
        console.log("Connected Successfully to Mongodb sever");
    }).catch((error) => {
        console.log("failed to connect with sever");
        console.log(error)
    })

    //to connect with database
    const db = client.db("first")

    //to connect with collection
    const coll = db.collection("first");

    //to access the documents from collection 
    coll.find({}).toArray().then((data) => {
        // console.log(data);
        res.json({
            ok: true,
            results: data,
        })
    }).catch((error) => {
        //console.log("error while accessing the data");
        res.json({
            ok: false,
            results: "error while accessing the data"
        });
    });

})//http:localhost:8989/getdata


app.post("/productUpdate", async (req, res) => {
    try {
        await client.connect();

        const db = client.db("db18to21");
        const productsColl = db.collection("products");

        const newProduct = req.body; // Assuming the request body contains the product data you want to insert

        const data = await productsColl.insertOne(newProduct);

        res.send({
            ok: true,
            result: "inserted successfully",
            data: data,
        });
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.json({
            ok: false,
            result: "error while accessing the data",
            error: error.message,
        })
        
    }
});//http:localhost:8989/productUpdate


app.listen(port, () => {
    console.log("Sever Started")
})