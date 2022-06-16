const fs=require('fs')
const readStream=fs.createReadStream('./view/view.txt')
let readData=''
readStream.on('open',()=>{
    console.log('reading stream has been opened');
})
readStream.on('data',(chunk)=>{
    console.log('data from the file');
    console.log(chunk);
    readData+=chunk
    console.log(readData.toString());
})
readStream.on('end',()=>{
console.log('reading stream has been closed');
})
readStream.on('err',(err)=>{
    console.log(err);
})