console.log("Program Started");
const fs=require('fs')
const writeFile=()=>{
fs.writeFile('view/view.txt',"This is Node Js async operation",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Data has been written successfully");
    }
})
}
const readFile=()=>{
    fs.readFile('view/view.txt',(err,data)=>{
        if(err){
            console.log("Error",err);
        }else{
            console.log("Data in the file is",data.toString());
        }
    })
}

fs.exists('view',(exists)=>{
    if(!exists){
        fs.mkdir('view',(folderErr)=>{
            if(folderErr){
                conFile();
                readFilsole.log("Folder has not been created");
            }else{
                writee();
            }
        })
    }
    else{
        writeFile();
                readFile();
    }

})

console.log("Program Ended");
