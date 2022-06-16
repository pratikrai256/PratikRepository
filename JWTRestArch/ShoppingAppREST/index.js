const express = require('express')
const mongoose = require('mongoose')
const port=4000
const cors=require('cors')//helps to prevent mismatching b/w domain names/different domain

const app = express();

const dbUrl='mongodb+srv://pratikrai256:pr909763@cluster0.aaoiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
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

const productRoutes=require('./routes/product')
const userRoutes= require('./routes/users');

//Body Parser Middleware
app.use(express.urlencoded({extended: true}))

//json Middleware
app.use(express.json());

//Router Level Middleware
app.use('/products',productRoutes);
app.use('/users',userRoutes);

//Error level Route
app.get('/error',(req, res)=>{
    res.status(500).send('something went wrong')
})

app.listen(port, ()=>{
    console.log(`The server is listening on port ${port}`);
})