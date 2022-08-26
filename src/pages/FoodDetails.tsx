import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../types";
import { Container, Row, Col } from "reactstrap";

export function FoodDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/products/${params.id}`)
      .then((resp) => resp.json())
      .then((productFromServer) => setProduct(productFromServer));
  }, []);

  const navigate = useNavigate();

  if (product === null) return <h2>Loading...</h2>;

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className="product__item">
              <div className="product__img">
                <img src={product.image} alt={product.title} width="25%" />
              </div>

              <h5>{product.title}</h5>
              <p>{product.desc}</p>
              <span className="product__price">€{product.price}</span>
              <button
                className="addToBasket__btn"
                onClick={() => {
                  fetch(`http://localhost:8000/basket?productId=${product.id}`)
                    .then((resp) => resp.json())
                    .then((results) => {
                      if (results.length === 0) {
                        fetch(`http://localhost:8000/basket`, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            productId: product.id,
                            quantity: 1,
                          }),
                        });
                      } else {
                        fetch(`http://localhost:8000/basket/${results[0].id}`, {
                          method: "PATCH",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            quantity: results[0].quantity + 1,
                          }),
                        });
                      }
                    })
                    .then(() => {
                      navigate("/basket");
                    });
                }}
              >
                Add to basket
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default FoodDetails;
