const express = require("express");
const cors = require("cors");
const createConnection = require("./config/connection");
const nodemailer = require('nodemailer');


const port = 8989; // Ensure this matches the port you run the server on
const app = express();

app.use(cors());
app.use(express.json());

app.get("/getfeedback", async (req, res) => {
  const feedbacksColl = await createConnection();

  feedbacksColl
    .find({})
    .toArray()
    .then((data) => {
      res.json({
        ok: true,
        results: data,
      });
    })
    .catch((error) => {
      console.log(error)
      res.json({
        ok: false,
        result: "Something went wrong while accessing the data",
      });
    });
}); // http://localhost:8989/getfeedback

app.post("/newfeedback", async (req, res) => {
  const newfeedback = req.body;
  try {
    const feedbacksColl = await createConnection();
    const data = await feedbacksColl.insertOne(newfeedback);

    res.send({
      ok: true,
      result: "Inserted successfully",
      data: data,
    });
  } catch (error) {
      res.send({
      ok: false,
      result: "Something went wrong while inserting feedback",
    });
  }
}); // http://localhost:8989/newfeedback


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tagoorbobbillapati02@gmail.com',
    pass: 'tagoor@84999', // use App Password if using Gmail
  },
});

const mailOptions = {
  from: 'tagoorbobbillapati02@gmail.com',
  to: 'uadykumarbobbillapati@gmailcom',
  subject: 'Hello from Node!',
  text: 'This is a test email using Nodemailer!',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
