const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port=4000
const oneDay =24*60*60*1000; 

app.use(cookieParser());

const obj=[
    {name: 'pratik',email: 'pratikraj958@gmail.com'},
    {name: 'pratik',email: 'pratikraj958@gmail.com'},
    {name: 'pratik',email: 'pratikraj958@gmail.com'},    
]

//Cookie Parser Middleware
app.get('/read-cookie', (req, res)=>{
    console.log(req.cookies);
    if(req.cookies){
        res.send("Cookies Exists"+""+JSON.stringify(req.cookies));
    }else{
        res.send("No cookies found")
    }
})

//Create Non-Persistent cookies
app.get('/create-cookie', (req, res)=>{
    res.cookie('myname','PratikRai');
    res.send('non-persistent-cookie has been created successfully')
})

//Create a Persistent cookie
app.get('/create-pcookie', (req, res)=>{
    res.cookie('email','pratikrai256@gmail.com',{maxAge:60000//1 min
    
})
res.send('persistent-cookie has been created successfully')
})

app.listen(port, ()=>{
    console.log(`The server listening on port ${port}`);
})

//Create a Persistent Object

// app.get('/create-pobjcookie', (req, res)=>{
//     res.cookie('data',{name: 'pratik',email: 'pratikraj958@gmail.com'},
//     {maxAge:oneDay
// })
// res.send('one persistent-object has been created successfully')
// })

app.get('/create-pobjcookie', (req, res)=>{
    res.cookie('data',obj,{maxAge:oneDay
})
res.send('one persistent-object has been created successfully')
})

//clear a cookie
app.get('/clear-cookie', (req, res)=>{
    res.clearCookie('myname')
    res.send('myname cookie has been deleted');
})

//clear all cookies
app.get('/clear-allcookies', (req, res)=>{
    for(let cookie in req.cookies){
        res.clearCookie(cookie);
    }
    res.send('all cookies have been deleted');
})

