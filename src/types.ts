export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  desc: string;
};

export type BasketItem = {
  id: number;
  productId: number;
  quantity: number;
  product: Product;
};
