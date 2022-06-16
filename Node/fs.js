console.log("Program Started");
const fs=require('fs');
if(!fs.existsSync('demo')){
    fs.mkdirSync('demo')
}else{
    fs.writeFileSync('demo/test.txt',"This is the first node js class");
    console.log("Data has been written succesfully");

    const data=fs.readFileSync('demo/test.txt')
    console.log(data);
    console.log(data.toString());
}
console.log("Program Ended");