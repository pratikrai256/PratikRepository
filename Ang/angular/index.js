var a;
a = "technoelevate";
console.log(a);
var arr;
arr = [1, 2, 3, 4, "aa"];
console.log(arr);
//class without constructor
var user = /** @class */ (function () {
    function user() {
        this.firstName = "testyantra";
    }
    user.prototype.display = function () {
        console.log("Inside the display function");
    };
    return user;
}());
var obj = new user();
console.log(obj.display());
console.log(obj.firstName);
var honda = /** @class */ (function () {
    function honda() {
    }
    honda.prototype.result = function () {
        return "abc";
    };
    return honda;
}());
var c = new honda();
var x = c.result();
console.log(x);
var c2 = {
    brand: "honda",
    price: 200000,
    result: function () {
        return "ab";
    }
};
console.log(c2);
var books;
(function (books) {
    //book1=10,
    books[books["book2"] = 0] = "book2";
    books[books["book3"] = 1] = "book3";
    books[books["book4"] = 2] = "book4";
})(books || (books = {}));
function displayBooks() {
    if (true) {
        return books.book3;
    }
}
console.log(displayBooks());
console.log(books);
//       Generics
function displayValue(item1, item2) {
    return item1;
    return item2;
}
console.log(displayValue("pratik", "Rai"));
