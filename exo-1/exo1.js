"use strict";
class Product {
    constructor(ref) {
        this._ref = 1000;
        this._ref = ref;
    }
    set ref(ref) {
        this._ref = ref;
    }
    get ref() {
        return this._ref;
    }
}
let refer = new Product(2000);
console.log(refer.ref);
