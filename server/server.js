const express = require('express')
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/capstone', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Mongoooo Open YEYY")
})
.catch(err => {
    console.log('Oh no error');
    console.log(err)
}) 

// route import 
const myShopRoutes = require('./routes/myShop');

const PORT = 8080;

/// middle ware 
app.use(cors());
app.use(express.json());

////// for devlopment only, delete before production 
app.use((req,res,next)=>{
    // debugging code here to see incoming requests
    next()
})


app.use('/my-shop',myShopRoutes);

app.listen(PORT,()=>{console.log(`Server Running on port:${PORT}`)})