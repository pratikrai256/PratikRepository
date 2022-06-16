const http=require('http')
const fs=require('fs')
http.createServer((request,response)=>{
    if(request.url==='/'& request.method==='GET'){
        fs.readFile('view/view.txt',(err,data)=>{
            if(err){
                response.writeHead(
                    404,{
                        'Content-Type':'text/plain'
                    }
                )
                response.write('File not found');
                response.end()
            }else{
                response.writeHead(
                    200,{
                        'Content-Type':'text/html'
                    }
                )
                response.write(data);
                response.end()
            }
        })
    }else{
        response.writeHead(
            404,{
                'Content-Type':'text/plain'
            }
        )
        response.write('File not found or wrong method');
        response.end()

    }
}).listen(4000,()=>{
    console.log('The Server is listening on port no 4000');
})