import ProductType from "../interfaces/Product/Product";

export const LowToHigh = (products: ProductType[]) =>
  products.sort((a, b) => a.price - b.price);

export const HighToLow = (products: ProductType[]) =>
  products.sort((a, b) => b.price - a.price);
