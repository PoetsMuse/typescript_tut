import {Invoice} from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs)

// const invoice1 = new Invoice('Mario', 'work on website', 250);
// const invoice2 = new Invoice('Luigi', 'work on website', 300);
// const invoice3 = new Invoice('Yoshi', 'relax', 400);

// let invoices: Invoice[] = []; // you cant push anything else but objects derived from class Invoice
// invoices.push(invoice1);
// invoices.push(invoice2);
// invoices.push(invoice3);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// });

//////////////////////////////////////////////////

// const anchor = document.querySelector('a')!;

// console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
    
})
////GENERICS
//Generics allows us to create reusable blocks of code which can be used with different types 

const addUID = <T extends {name: string, age: number}>(obj: T) => { // T is capturing whatever item we pass in to the function
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}
let docOne = addUID({name: 'yoshi', age: 40});
console.log(docOne);

//ENUMS  
//Enums is a special type in type script that allows to store constants or keywords and associate them with a numeric value
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

//Generics with interfaces
interface Resourse<T>{
    uid: number;
    resourceType: ResourceType;
    data: T; // due to the T data may take any data type
}

const docThree: Resourse<string> = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: 'Shaun'
}
const docFour: Resourse<string[]> = {
    uid: 2,
    resourceType: ResourceType.BOOK,
    data: ['bread', 'milk', 'juice']
}
console.log(docThree, docFour);
