import { Link } from "react-router-dom";

import "../../styles/product-card.css";

function ProductCard(props: {
  item: { id: number; title: string; image: string; price: number };
}) {
  const { id, title, image, price } = props.item;
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/menu/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">€{price}</span>
          <button className="addToBasket__btn">Add to Basket</button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
