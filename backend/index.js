const PORT = 4000
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())

const Login = require('./Routes/login')
const Register = require('./Routes/register')
const Display = require('./Routes/display')
const Activity = require('./Routes/activity')
const Grade = require('./Routes/grade')
const Link = require('./Routes/parent_therapist')
const Message = require('./Routes/messages')
mongoose.connect("mongodb://localhost:27017/Aided-Database",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((connected)=> {
        console.log("DataBase Connected");
        app.listen(PORT,()=>{
            console.log(`started at port ${PORT}`)
        })
    })
    .catch((err)=>{
        console.log(err);
    })

app.use("/login",Login)
app.use("/register",Register)
app.use("/",Display)
app.use("/activity",Activity)
app.use("/grade",Grade)
app.use("/link",Link)
app.use("/message",Message)