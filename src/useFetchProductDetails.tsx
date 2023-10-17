import { useEffect, useState } from "react";
import { CartProduct, Product } from "./model";

const useFetchProductDetails = (products: CartProduct[]): Product[] => {
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    Promise.all(
      products.map((product) =>
        fetch(`https://fakestoreapi.com/products/${product.id}`)
          .then((res) => res.json())
          .then((res) => ({ ...res, quantity: product.quantity }))
      )
    ).then((res) => {
      setData(res);
    });
  }, [products]);
  return data;
};

export default useFetchProductDetails;
