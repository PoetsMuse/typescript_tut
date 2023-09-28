import {Invoice} from './classes/Invoice.js';

const invoice1 = new Invoice('Mario', 'work on website', 250);
const invoice2 = new Invoice('Luigi', 'work on website', 300);
const invoice3 = new Invoice('Yoshi', 'relax', 400);

let invoices: Invoice[] = []; // you cant push anything else but objects derived from class Invoice
invoices.push(invoice1);
invoices.push(invoice2);
invoices.push(invoice3);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});

//////////////////////////////////////////////////

const anchor = document.querySelector('a')!;

console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
})