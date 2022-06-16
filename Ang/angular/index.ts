var a:any
a="technoelevate"
console.log(a);

var arr:any[]
arr=[1,2,3,4,"aa"]
console.log(arr);



//class without constructor

class user{
    firstName:string="testyantra"
    lastName:string
    id:number
    display(){
        console.log("Inside the display function");
        
    }
}

var obj=new user()
console.log(obj.display());
console.log(obj.firstName);


//class with constructor
//class person{
    //name:string
    //id:number
   // constructor(name,id)
//}





interface car{
    brand:string
    price:number
    result():string
}

class honda implements car{
    brand:string
    price:number;
    name:string
    color:string
    result():string{
        return "abc"
    }
}

var c = new honda()
var x=c.result()
console.log(x);

var c2:car={
    brand:"honda",
    price:200000,
    result(){
        return "ab"
    }
}
console.log(c2);

enum books{
    //book1=10,
    book2,
    book3,
    book4
}
function displayBooks():books{
    if(true){
        return books.book3
    }
}
console.log(displayBooks());
console.log(books);


//       Generics

function displayValue<t>(item1:t):t{
    return item1
}
console.log(displayValue("Pratik"));


