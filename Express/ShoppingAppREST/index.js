const express = require('express')
const mongoose = require('mongoose')
const port=4000

const app = express();

const dbUrl='mongodb+srv://pratikrai256:pr909763@cluster0.spa3m.mongodb.net/?retryWrites=true&w=majority'
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

const productRoutes= require('./routes/product');

//Body Parser Middleware
app.use(express.urlencoded({extended: true}))

//json Middleware
app.use(express.json());

//Router Level Middleware
app.use('/products',productRoutes);

//Error level Route
app.get('/error',(req, res)=>{
    res.status(500).send('something went wrong')
})

app.listen(port, ()=>{
    console.log(`The server is listening on port ${port}`);
})