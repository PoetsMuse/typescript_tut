const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});

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
someObj = {name: 'yoshi', age: '25'}
