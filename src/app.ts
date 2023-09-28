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

console.log(invoice1, invoice2)

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