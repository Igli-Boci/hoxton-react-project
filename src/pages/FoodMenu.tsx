import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../types";
import { Container, Row, Col } from "reactstrap";

function FoodMenu() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);
  return (
    <section className="products-container main-wrapper">
      <Container>
        <Row>
          <Col>
            {products.map((product) => (
              <Link to={`/menu/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h5>{product.title}</h5>
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FoodMenu;