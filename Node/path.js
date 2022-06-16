const path=require('path')
const filePath=path.parse(__filename)
console.log(filePath);
//Root of the filepath
console.log(filePath.root);
//Name of the file
console.log(filePath.name);
//Extension of the file
console.log(filePath.ext);
//Base pr file name with extension of the file
console.log(filePath.base);