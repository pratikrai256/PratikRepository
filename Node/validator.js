const valiadtor=require('validator');
const isValid=valiadtor.isEmail('abcd@gmail.com')
console.log(isValid);
const isValidPassword=valiadtor.isStrongPassword('Pr909763')
console.log(isValidPassword);
const isValidDate=valiadtor.isDate('2000-03-13')
console.log(isValidDate);
const isMatching=valiadtor.equals('Pratik','Pratik')
console.log(isMatching);
const isAlphaOnly=valiadtor.isAlpha('Rai')
console.log(isAlphaOnly);
const isAlphaNumeric=valiadtor.isAlphanumeric('Rai9')
console.log(isAlphaNumeric);
const isDivisible=valiadtor.isDivisibleBy('200',2)
console.log(isDivisible);
const isValidMobileNo=valiadtor.isMobilePhone('70012')
console.log(isValidMobileNo);