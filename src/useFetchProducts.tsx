import { useEffect, useState } from "react";
import { CartProduct } from "./model";

const useFetchProducts = (): CartProduct[] => {
  const [data, setData] = useState<CartProduct[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/carts/2")
      .then((res) => res.json())
      .then((res) => {
        const products = res?.products?.map(({ productId, quantity }) => ({
          id: productId,
          quantity
        }));
        setData(products);
      });
  }, []);
  return data;
};

export default useFetchProducts;
