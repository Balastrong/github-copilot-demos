class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}

  toString() {
    return `${this.name} costs $${this.price}`;
  }
}
