import { useEffect, useState } from "react";
import "./styles.css";
import useFetchProducts from "./useFetchProducts";
import useFetchProductDetails from "./useFetchProductDetails";
import ProductCard from "./ProductCard";
import ProductsSorting from "./ProductsSorting";
import { sortProductsByPrice } from "./utils";

export default function App() {
  const [sortOption, setSortOption] = useState<string>("incre");
  const products = useFetchProducts();
  const productListing = useFetchProductDetails(products);
  const [productList, SetProductList] = useState(productListing);

  useEffect(() => {
    SetProductList(productListing);
  }, [productListing]);

  const onProductSorting = (event: any) => {
    const option = event.target.value;
    setSortOption(option);
    const sortedProducts = sortProductsByPrice(productList, option);
    console.log("sortedProducts", sortedProducts);
    SetProductList(sortedProducts);
  };

  return (
    <div className="App">
      <div className="header">
        <h2>Products({products.length})</h2>
        <ProductsSorting option={sortOption} onSort={onProductSorting} />
      </div>
      <div className="productListing">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
