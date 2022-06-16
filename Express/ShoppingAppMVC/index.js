const express= require('express')
const exphbs=require('express-handlebars')
const cookieParser= require('cookie-parser')
const session= require('express-session')
let alert = require('alert'); 
const {redirect}= require('statuses')
const router = express.Router()
const mongoose = require('mongoose')
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

const port=4000;
const oneDay=24*60*60*1000;
const uname='technoelevate';
const pwd='technoelevate';

const app = express();
//Importing Routes
const productRoutes = require('./routes/product')

//Router level middleware
app.use('/products',productRoutes)

//Session level Middleware
app.use(session({
    secret:'thisisasecretkey',
    saveUninitialized: true,
    resave: false,
    cookie:{
        maxAge:oneDay
    }
    }))

//cookie parser middleware
app.use(cookieParser());

//setting up express handlebars
app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars')

//body parser middleware
app.use(express.urlencoded({extended: true}))

//json Middleware
app.use(express.json());

//User Page
app.get('/user',(req, res)=>{
    console.log(req.session);
    if(req.session.userid){
        res.send(`session is validated <a href="/logout">Logout</a>`)
    }else{
        res.redirect('/')
    }
}
)

//Login page
app.post('/login',(req, res)=>{
    console.log( req.body);
    let{username, password} = req.body
    console.log(password);
    if(username===uname && password===pwd){
        req.session.userid=username
        res.redirect('/products/products')

    }else{
        alert('Credentials not matching,Please check your credentials and enter again')
        res.redirect('/')
    }
})

app.get('/logout',(req, res)=>{
req.session.destroy()
res.redirect('/');

})

app.get('/',(req, res)=>{
    if(req.session.userid){
        res.redirect('/user')
    }else{
        res.render('./login.handlebars')
    }
})


//Error Route
app.get('/error',(req, res)=>{
    res.status(500).send('something went wrong')
    })

app.listen(port,()=>{
    console.log(`The server is listening on port ${port}`);
})