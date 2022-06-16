const fs=require('fs')
try{
    const data=fs.readFileSync('./demo/dem.txt');
    console.log(data.toString());
}catch{
    // console.log('error has been caught');
    if (!fs.existsSync('demo')){
        fs.mkdirSync('demo')
    }
    else{   
        fs.writeFileSync('demo/dem.txt',"Handling Error Program is running");
        console.log("Data has been written succesfully");
    
        const data=fs.readFileSync('demo/dem.txt')
        console.log(data.toString());
    }
}