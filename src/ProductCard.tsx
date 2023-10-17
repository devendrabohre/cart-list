import { Product, ProductCardProps } from "./model";

const ProductCard = ({ product }: ProductCardProps) => {
  const { title, image, quantity, price, id } = product;
  return (
    <div className="productCard" key={id}>
      <div className="imageSection">
        <img src={image} width="200" height="200" />
      </div>
      <div className="detailSection">
        <div>
          <h4>Title: </h4>
          <span>{title}</span>
        </div>
        <div>
          <h4>Quantity: </h4>
          <span>{quantity}</span>
        </div>
        <div>
          <h4>Price: </h4>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
