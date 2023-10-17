export interface CartProduct {
  id: string;
  quantity: number;
}

export interface Product {
  id: string;
  quantity: number;
  title: string;
  price: number;
  image: string;
}

export interface ProductCardProps {
  product: Product;
}

export interface ProductSortingProps {
  option: string;
  onSort: React.ChangeEventHandler<HTMLSelectElement>;
}
