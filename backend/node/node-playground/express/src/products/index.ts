export class Product {
  public total: number;
  public price: number;

  constructor(total: number, price: number) {
    this.total = total;
    this.price = price;
  }

  sell() {
    this.total--;
  }

  get stock() {
    return this.total > 0 ? 'In stock' : 'Out of stock';
  }
}

const product = new Product(3, 100);
console.log(product.stock); // In stock
product.sell();
console.log(product.stock); // In stock
product.sell();
console.log(product.stock); // In stock
