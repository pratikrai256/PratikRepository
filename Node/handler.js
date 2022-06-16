 const users=[
    {name:"Pratik",id:101},
    {name:"Harsha",id:102},
    {name:"Shekh",id:103}
]
const products=[
    {name:"mobile",price:15000},
    {name:"laptop",price:45000},

]
const handleRequest=(request,response)=>{
    if(request.url==='/'){
        response.end('HomePage')
    }
    else if(request.url==='/login'){
        response.end('<b>Login Page</b>')
    }       
    else if(request.url==='/users'){
        const usersData=JSON.stringify(users);
        response.end(usersData)
    }
     else if(request.url==='/products'){
        const productsData=JSON.stringify(products);
        response.end(productsData)
    }
}
module.exports={
    handleRequest
}