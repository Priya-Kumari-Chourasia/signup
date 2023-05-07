const express = require('express')
const app =express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const routesUrls = require('./routes/routes')
const cors = require('cors')
//const user = require('./models/SignUpModels')
dotenv.config()
//const DB = "mongodb+srv://Priya:Priya@doc.lfbp1f7.mongodb.net/mytable?retryWrites=true&w=majority"
//mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("database connected"))
//process.env.DATABASE_ACCESS
mongoose.connect(process.env.DATABASE_ACCESS)
.then(()=>{
    console.log("database connected");
}).catch((err) => console.log("no connection"));

app.use(express.json())
app.use(cors());
app.use('/app',routesUrls)
app.listen(4000, () => console.log("server is up and running"))