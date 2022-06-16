const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')//helps to prevent mismatching b/w domain names/different domain

const app = express();

const dbUrl='mongodb+srv://pratikrai256:pr909763@cluster1.6mn0m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//Connecting through mongodb database
mongoose.connect(dbUrl,{ 
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err){
        console.log("DB connected successfully");
    }else{
        console.log("Db not connected,connection failed");
    }
})


//cors level middleware
app.use(cors())

const userRoutes= require('./routes/users');

const testRoutes=require('./routes/labtest')

//Body Parser Middleware
app.use(express.urlencoded({extended: true}))

//json Middleware
app.use(express.json());

//Router Level Middleware
app.use('/users',userRoutes);
app.use('/test',testRoutes);

//Error level Route
app.get('/error',(req, res,next)=>{
    res.status(500).send('something went wrong')
    res.json({
        error:true,
        message:"Failure"
        ,data:null
    })
})

module.exports = app