import { ProductSortingProps } from "./model";
const ProductsSorting = ({ option, onSort }: ProductSortingProps) => {
  return (
    <div className="sortingOptions">
      Price:
      <select onChange={onSort}>
        <option value="incre" selected={option == "incre"}>
          Increasing
        </option>
        <option value="decre" selected={option == "decre"}>
          Decreasing
        </option>
      </select>
    </div>
  );
};

export default ProductsSorting;
