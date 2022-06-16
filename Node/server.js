const http=require('http')
const server=http.createServer((request,response)=>{
    console.log("Server has been created");
    console.log("Request",request);
    console.log("Response",response);
     response.write("This is the first part of the server")
    response.write("This is the second part of the server")
    response.end("This is the first server we have created")
})
server.listen(4001,()=>{
    console.log("This server is listening on port number 4001");
})