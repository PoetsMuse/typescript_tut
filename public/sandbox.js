var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
//explicitly indicating the type for the func parameter. It won't let assigning anything but number
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(5));
//explicit types
var character;
var age;
var isLoggedIn;
//arrays
var ninjas = [];
//union types  / one of several different types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
//objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColour: 'black' }; // but you can't add any other properties that do not exist in the initial object
//any type  / think twice before using
var number = 25;
//destructuring object
var someObj;
someObj = { name: 'yoshi', age: '25' };
