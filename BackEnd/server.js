const express = require("express");
const sequelize = require("sequelize");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const db = require("./models");
const userRoutes = require("./routes/userRoutes");
const cors = require('cors');

//setting up your port
const PORT = process.env.PORT || 8080;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// use cors access
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: false }).then(() => {
  console.log("db has been re sync");
});

//routes for the user API
app.use("/api/users", userRoutes);
app.use("/api/blog", userRoutes);

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));

