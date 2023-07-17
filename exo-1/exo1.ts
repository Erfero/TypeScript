class Product {
    protected _ref: number = 1000;
    constructor(ref: number) {
      this._ref = ref;
    }
    set ref(ref: number) {
        this._ref = ref;
    }
    get ref(): number {
        return this._ref;
    }
}
let refer = new Product(2000);
console.log(refer.ref);
