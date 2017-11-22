console.log("hello typescript");
// var  a:string = "Raj";
// console.log(a);
var b = 20;
function c() {
    var b = 30;
    if (true) {
        // console.log(b);
        var b_1 = 40;
    }
    console.log(b);
}
console.log(b);
c();
var array;
array = [
    {
        "name": "Raj",
        "Role": "Admin"
    },
    {
        "name": "Kumar",
        "Role": "Student"
    }
];
// console.log(array);
array.forEach(function (element) {
    if (element.name == "Raj") {
        console.log(element.Role);
    }
});
//fucntion types
function multiply(number1, number2) {
    return number1 * number2;
}
console.log(multiply(10, 30));
//object types
var customObject = {
    name: "Raj",
    age: 27,
    role: "Admin"
};
console.log(customObject);
//tuples
var customArray = ["hari", 2];
//union types
var unionVariable;
unionVariable = "true";
console.log(unionVariable);
unionVariable = 10;
console.log(unionVariable);
//check types
var checkTypes = 10;
console.log(typeof checkTypes);
function check() {
    if (typeof checkTypes == "number") {
        console.log("type is number");
    }
}
check();
//arrow function
var additonFunction = function (number1, number2) { return number1 * number2; };
// let something = "return something"
console.log(additonFunction(10, 20));
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.name = name;
        this.username = username;
        console.log(this.setRole("Admin"));
    }
    Person.prototype.setAge = function (age) {
        this.age = age;
        console.log(this.age);
    };
    Person.prototype.setRole = function (role) {
        console.log(role);
    };
    return Person;
}());
var person = new Person("Hari", "Hari1234");
var employee = new Person("rajesh", "raju123");
console.log(person.name, person.username);
console.log(employee.name);
person.setAge(27);
// employee.setRole("Admin") 
