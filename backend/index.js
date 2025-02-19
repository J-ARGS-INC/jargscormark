require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000
const cors = require("cors");
// connecting to DB
require("./config/db");

// Fixing CORS
app.use(cors());


// parsing data
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// testing route
app.get("/", (req, res) => res.json("This is working fine"));

// unprotected  route
app.use("/api/auth", require("./routes/auth"));

// protected routes

// running server
app.listen(port, () => console.log(`http://localhost/${port}`))