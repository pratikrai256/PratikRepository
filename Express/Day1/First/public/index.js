const express= require ('express')
const app = express();
const port=3000;
const port=require('path')

//Middleware functions
//Builtin Middleware Functions

app.use(express.static('public'))

//Hiding the folder name from  the user in frontend
app.use('static',express.static('./files'))

//app.use('/hello',express.static('/hi'))
app.use('/hello',(req,res) => {
    res.sendFile(path.join(__dirname,'hi/hello.html'))
})

//User defined middleware functions
const getDate=(req,res,next) => {
    console.log("This is the first user defined middleware function");
    const date=Date.now();
    req.reqDate = date;
    next();
}

const getMsg=(req,res,next) => {
    console.log("This is the second user defined middleware function");
    req.msg ="Response Object has been changed"
    next();
}

app.use(getDate)
app.use(getMsg)

//Using the user defined middleware function
app.get('/getDate',(req,res)=>{
    res.send('Hello World' + new Date(req.reqDate))
})
app.get("/",(req,res)=>{
    res.send('This has come from the server');
})
app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'));
})
app.get("/detail/",(req,res)=>{
    res.send(`<h1>This is the detail page<h1>
    <p>Current Date and Time:${new Date(req.reqDate)}</p>
    <button onClick="alert('hello world')">Click </button>
    `)
})

app.get('/getMsg',(req,res)=>{
    res.send(res.msg);
})
app.listen(port,()=>{
    console.log(`The server is listening on port ${port}`);
})