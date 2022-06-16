const fs=require('fs');
console.log("Program Started");
if(!fs.existsSync('demo1')){
    fs.mkdirSync('demo1');
}else{
    fs.writeFileSync('demo1/test.txt',"This is the first assignment in the demo")
}
const data=fs.readFileSync('demo1/test.txt')
console.log(data);
console.log(data.toString());