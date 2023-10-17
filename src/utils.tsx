import { Product } from "./model";

export const sortProductsByPrice = (products: Product[], option: string) => {
  console.log("option", option);
  return JSON.parse(JSON.stringify(products)).sort(
    (product1: Product, product2: Product) => {
      if (option === "incre") return product1.price - product2.price;
      else return product2.price - product1.price;
    }
  );
};
