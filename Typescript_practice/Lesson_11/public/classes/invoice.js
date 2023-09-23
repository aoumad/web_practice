"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
// adding a class
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount}$ for ${this.details}`;
    }
}
exports.Invoice = Invoice;
