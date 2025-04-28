const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function createConnection() {

    await client.connect();

    const db = client.db("dbassignment1");
    const feedbacksColl = db.collection("feedbacks");

    return feedbacksColl;
}

module.exports = createConnection;
