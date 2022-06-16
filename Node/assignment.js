const fs=require('fs')
const writeFile=()=>{
fs.writeFile('demo/demo.txt',"This is Node Js async operation ",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Data has been written successfully");
    }
})
}
const appendFile=()=>{
    fs.appendFile('demo/demo.txt',"It is for us to do it as an assignment",()=>{})
}
const readFile=()=>{
    fs.readFile('demo/demo.txt',(err,data)=>{
        if(err){
            console.log("Error",err);
        }else{
            console.log("Data in the file is",data.toString());
        }
    })
}
// fs.exists('demo',(exists)=>{
//     if(!exists){
//         fs.mkdir('demo',(folderErr)=>{
//             if(folderErr){
//                 console.log("Folder has not been created");
//             }else{
//                 writeFile();
//                 appendFile();
//                 readFile();
//             }
//         })
//     }
//     else{
//         writeFile();
//         appendFile();
//                 readFile();
//     }

// })
writeFile();
setTimeout(()=>{
    readFile();
},2000)
appendFile()
