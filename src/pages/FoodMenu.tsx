import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../types";
import { Container, Row, Col } from "reactstrap";
import "../styles/food-menu.css";

function FoodMenu() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {products.map((product) => (
              <div className="food__wrapper">
                <div className="food__image">
                  <img src={product.image} alt={product.title} width="25%" />
                </div>
                <div className="food__title">
                  <h5>
                    <Link to={`/menu/${product.id}`}>{product.title}</Link>
                  </h5>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FoodMenu;
