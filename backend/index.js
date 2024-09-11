const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const cookieParser  = require("cookie-parser");
const dotenv =  require("dotenv");
dotenv.config()
const path = require  ("path");
const connectDb  = require("./config/db");

//configuration
dotenv.config()
connectDb()

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser()) 

const PORT = process.env.PORT ||  8000

app.listen(PORT, ()=> console.log(`Server is running on the port ${PORT}`));
