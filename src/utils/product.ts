class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}

  getProductDetails() {
    return `${this.name} costs $${this.price}.`;
  }

  getDiscountedPrice(discount: number): number {
    return this.price - (this.price * discount) / 100;
  }
}
