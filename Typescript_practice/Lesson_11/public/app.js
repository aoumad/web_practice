"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_js_1 = require("./classes/invoice.js");
const invOne = new invoice_js_1.Invoice('Abderazzak', 'practicing typescript', 250);
const invTwo = new invoice_js_1.Invoice('School project', 'a web project', 367);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
invOne.client = 'Hamza'; // we can change the value of an instance vairable when we need to 
// I can't change the amount variable since it's readonly
const anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
}
console.log(anchor.href);
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
