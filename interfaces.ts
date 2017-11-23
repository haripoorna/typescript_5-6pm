interface NamedPerson{
    name : String;
    age?:Number | string;
    greet(lastName : String) : void;

}

const person = {
    name : "Raj",
    age : 27,
    greet(lastName : String){
        console.log("hi, I'm" + " " + this.name + " "+ lastName)
    }
}
function greet(person: NamedPerson){
    console.log("hi," + person.name)
}

function changedName(person: NamedPerson){
    person.name = "kumar"
}
// greet({name:"kamal" , age : "30"});
changedName(person);
greet(person);
person.greet("something");

class Person implements NamedPerson{
    name : String;
    greet(lastName: String) {
        console.log("hi, I'm" + " " + this.name + " " + lastName)
    }
}
const myPerson = new Person();
const myPerson2 = new Person();
myPerson.name = "krishna";
myPerson2.name = "Ram"

greet(myPerson);
myPerson.greet("something");

greet(myPerson2);
myPerson2.greet("something");