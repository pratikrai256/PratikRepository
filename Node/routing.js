const http=require('http')
const handler=require('./handler')
const server=http.createServer(handler.handleRequest).listen(3000,()=>{
    console.log("The server is liostening on port number 3000");
})