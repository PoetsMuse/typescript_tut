class Invoice{
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this. details = d;
        this.amount = a;
    }
    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invoice1 = new Invoice('Mario', 'work on website', 250);
const invoice2 = new Invoice('Luigi', 'work on website', 300);

let invoices: Invoice[] = []; // you cant push anything else but objects derived from class Invoice
invoices.push(invoice1);
invoices.push(invoice2);

console.log(invoices)

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