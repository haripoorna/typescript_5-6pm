var person = {
    name: "Raj",
    age: 27,
    greet: function (lastName) {
        console.log("hi, I'm" + " " + this.name + " " + lastName);
    }
};
function greet(person) {
    console.log("hi," + person.name);
}
function changedName(person) {
    person.name = "kumar";
}
// greet({name:"kamal" , age : "30"});
changedName(person);
greet(person);
person.greet("something");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("hi, I'm" + " " + this.name + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
var myPerson2 = new Person();
myPerson.name = "krishna";
myPerson2.name = "Ram";
greet(myPerson);
myPerson.greet("something");
greet(myPerson2);
myPerson2.greet("something");
