const me = {
    name: "Kate",
    age: 40,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spend", amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
////////////////////////////////////////////////
import { Invoice } from './classes/Invoice.js';
const invoice1 = new Invoice('Mario', 'work on website', 250);
const invoice2 = new Invoice('Luigi', 'work on website', 300);
const invoice3 = new Invoice('Yoshi', 'relax', 400);
let invoices = []; // you cant push anything else but objects derived from class Invoice
invoices.push(invoice1);
invoices.push(invoice2);
invoices.push(invoice3);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
//////////////////////////////////////////////////
const anchor = document.querySelector('a');
console.log(anchor.href);
const form = document.querySelector('.new-item-form');
//console.log(form.children);
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
