const express = require('express');
const exphbs= require('express-handlebars')
const router = express.Router()
const port=4000;
const mongoose = require('mongoose')

const app = express();

const dbUrl='mongodb+srv://pratikrai256:pr909763@cluster0.aaoiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//Connecting through mongodb database
mongoose.connect(dbUrl,{ 
    useNewUrlParser:true,//it will enable all those query params that we use in our programs
    useUnifiedTopology:true//it should maintain some syntax or rules or properties if we are using some remote express application
},(err)=>{
    if(!err){
        console.log("DB connected successfully");
    }else{
        console.log("Db not connected,connection failed");
    }
})
//Importing Routes
const productRoutes = require('./routes/product')

//Setting up handlebars
app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');


//Body Parser middleware
app.use(express.urlencoded({extended:true}))//if we don't use it,will not get the request body'

//Router level middleware
app.use('/products',productRoutes)

//Landing Page
app.get("/",(req, res)=>{
    res.render("./landingpage.handlebars")
})

//Error Route
app.get('/error',(req, res)=>{
res.status(500).send('something went wrong')
})

app.listen(port,()=>{
    console.log(`The server is listening on port number ${port}`);
})