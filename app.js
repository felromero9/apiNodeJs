const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const expressValidator = require("express-validator");
const dotenv = require('dotenv');
dotenv.config();

//database
mongoose
    .connect(
        process.env.MONGO_URI, 
        { useNewUrlParser: true }
    )
    .then(() => 
        console.log('DATA BASE Conected !')
);

mongoose
    .connection.on('error', err => {
    console.log(`DATA BASE connection error: ${err.message}`)
});

//Bring routes 
const postRoutes = require("./routes/post");


// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);

const port = 8080;
app.listen(port, () => {
    console.log(`A NodeJs API is listenig on port: ${port}`);
});
