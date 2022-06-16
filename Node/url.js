const url=require('url')
const http=require('http')
const fs=require('fs')
http.createServer((request,response)=>{
    const reqUrl=url.parse(request.url,true)
    console.log(reqUrl.query.id);
    console.log(reqUrl.query.name);
    response.write('The data has coming from Server');
    response.write(JSON.stringify(reqUrl.query));
    fs.appendFile('demo/demo.txt',JSON.stringify(reqUrl.query),(err)=>{
if(err){
    console.log(err);
}else{
    console.log('no error');
}
    })
    response.end();
}).listen(4000,()=>{
    console.log("The server is listening on port no 4000");
})