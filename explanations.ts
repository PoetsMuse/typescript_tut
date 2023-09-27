//explicitly indicating the type for the func parameter. It won't let assigning anything but number
const circ = (diameter: number) => {
    return diameter * Math.PI;
}
console.log(circ(5));

//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

//arrays
let ninjas: string[] = [];

//union types  / one of several different types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed)

let uid: string|number;
uid = '123';
uid = 123;

//objects
let ninjaOne: object;
ninjaOne = {name: 'yoshi', age: 30};

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}
ninjaTwo = {name: 'mario', age: 20, beltColour: 'black'} // but you can't add any other properties that do not exist in the initial object

//any type  / think twice before using
let number: any = 25;

//destructuring object
let someObj: {name: any, age: any};
someObj = {name: 'yoshi', age: '25'};

//functions
let greet: Function;

greet = () => {
    console.log('hello');
}

//optional parameters, like c use ? / default value for d, that is also optional
const add = (a: number, b: number, c?: number|string, d: number = 10) => {
    console.log(a + b);
}
add(5, 10)

//Creating the types to reuse for multiple cases
type StringOrNum = string|number;
type objWithName = {name: string, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}
const greet1 = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}
const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello again`);
}


//Function signatures
//ex1
let oneMoreGreet: (a: string, b: string) => void; //signature

oneMoreGreet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

//ex2
let calc: (a: number, b: number, c: string) => number; // signature

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add'){
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

//ex3
let ninjaLogDetails: (obj: {name: string, age: number}) => void;

ninjaLogDetails = (ninja: {name: string, age: number}) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}