// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const mongoose = require('mongoose');
const cors = require("cors");

const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');
const authMiddleware = require('./middlewhares/auth');



const app = express();

app.use(cors());
app.set('view engine', 'ejs');
mongoose.set('strictQuery', true);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

// // connect to mongodb
mongoose.connect("mongodb+srv://raouf:p1qborLe4cE13p5R@cluster0.enju1wy.mongodb.net/test");

mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
}).on('error', function(error){
    console.log('Connection error:', error);
});



app.listen(5000, () => console.log('Server started on port 5000'));


// initiallize routes 
app.use('/api', apiRouter);

// register auth routes
app.use('/auth', authRouter);

// use auth middleware for api routes
app.use('/api', authMiddleware, apiRouter);