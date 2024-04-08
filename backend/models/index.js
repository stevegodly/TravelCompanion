const express=require('express')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors =require('cors')
const jwt=require("jsonwebtoken")
const app=express()
const router=require('./routes/chats')
const Message=require('./models/message')


require('dotenv').config()
const jwtSecret=process.env.SECRET;

app.use(express.json());
app.use(cookieParser());

const port=process.env.PORT

const server=app.listen(port, () =>
  console.log(`Server is listening on port ${port}...`)
)

app.use(cors({
  origin:'http://localhost:5173',
  methods:['GET','POST','PATCH','DELETE'],
  allowedHeaders:['Content-Type'],    
  credentials:true,
}))

app.use('/api/v1/users',router)

