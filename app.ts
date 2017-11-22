console.log("hello typescript");
// var  a:string = "Raj";
// console.log(a);


var b:Number = 20;
function c(){
    let b = 30;
    if(true){
        // console.log(b);
     let b:Number = 40;
    }
    console.log(b);
}
console.log(b);
c();

let array: Array<any>
array = [
    { 
        "name" : "Raj",
        "Role" : "Admin"
    },
    {
        "name": "Kumar",
        "Role": "Student"
    }
]
// console.log(array);
array.forEach((element)=>{
    if(element.name == "Raj"){
        console.log(element.Role);
    }
})

//fucntion types
function multiply(number1:number, number2:number): number{
    return number1*number2;
}
console.log(multiply(10,30));

//object types
let customObject: {name: String, age : Number , role: String} = {
    name : "Raj",
    age : 27,
    role : "Admin"
}
console.log(customObject);

//tuples

let customArray:[String, Number] = ["hari", 2];

//union types
let unionVariable: String | Number;

unionVariable = "true";
console.log(unionVariable);
unionVariable = 10;
console.log(unionVariable);

//check types

let checkTypes: Number = 10;
console.log(typeof checkTypes)
function check(){
    if(typeof checkTypes == "number"){
        console.log("type is number");
    }
}
check();

//arrow function
let additonFunction = (number1: number, number2: number): number => number1 * number2;
    // let something = "return something"
console.log(additonFunction(10,20));


class Person {
    name: String;
    username: String;
    age: Number;
    Role: String
    constructor(name: string, username: string) {
        this.name = name;
        this.username = username
        //console.log(this.setRole("Admin"))
    }
    setAge(age: number) {
        this.age = age;
        console.log(this.age);
    }
    private setRole(role: String) {
        console.log(role);
    }
}

var person = new Person("Hari", "Hari1234");
var employee = new Person("rajesh", "raju123")
console.log(person.name, person.username);
console.log(employee.name);
person.setAge(27);
// employee.setRole("Admin")