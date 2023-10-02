////GENERICS
//Generics allows us to create reusable blocks of code which can be used with different types 

const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}
let docOne = addUID({name: 'yoshi', age: 40});
console.log(docOne);

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

// class Invoice {
//     // //access modifiers
//     // readonly client: string;// can read inside and outside but can't change
//     // private details: string;//can't access from outside the class, but can read and change inside the class
//     // public amount: number;// can accsess and change from inside and outside
//     //or
//     constructor(client, details, amount) {
//         this.client = client;
//         this.details = details;
//         this.amount = amount;
//     }
//     format() {
//         return `${this.client} owes $${this.amount} for ${this.details}`;
//     }
// }
// const invoice1 = new Invoice('Mario', 'work on website', 250);
// const invoice2 = new Invoice('Luigi', 'work on website', 300);
// const invoice3 = new Invoice('Yoshi', 'relax', 400);
// let invoices = []; // you cant push anything else but objects derived from class Invoice
// invoices.push(invoice1);
// invoices.push(invoice2);
// invoices.push(invoice3);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// });
// //////////////////////////////////////////////////
// const anchor = document.querySelector('a');
// console.log(anchor.href);
// const form = document.querySelector('.new-item-form');
// //console.log(form.children);
// //inputs
// const type = document.querySelector('#type');
// const toFrom = document.querySelector('#tofrom');
// const details = document.querySelector('#details');
// const amount = document.querySelector('#amount');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
// });
