"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invoice1 = new Invoice('Mario', 'work on website', 250);
const invoice2 = new Invoice('Luigi', 'work on website', 300);
let invoices = []; // you cant push anything else but objects derived from class Invoice
invoices.push(invoice1);
invoices.push(invoice2);
console.log(invoices);
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
