import { useEffect, useState } from "react";
import { BasketItem } from "../types";
import { Container, Row, Col } from "reactstrap";

import "../styles/basket.css";

function Basket() {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/basket?_expand=product")
      .then((resp) => resp.json())
      .then((basketFromServer) => setBasket(basketFromServer));
  }, []);

  function getTotal() {
    let total = 0;
    for (let item of basket) {
      total += item.quantity * item.product.price;
    }
    return total;
  }
  return (
    <section className="basket-container">
      <Container>
        <Row>
          <Col>
            <h2>Your Basket</h2>
            <ul>
              {basket.map((item) => (
                <li>
                  <article className="basket-container__item">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      width="30%"
                    />
                    <h3 className="basketItem__title">{item.product.title}</h3>
                    <p>
                      Quantity:
                      <select
                        value={item.quantity}
                        onChange={(event) => {
                          const newQuantity = Number(event.target.value);

                          if (newQuantity === 0) {
                            let basketCopy = basket.filter(
                              (target) => target.id !== item.id
                            );

                            fetch(`http://localhost:8000/basket/${item.id}`, {
                              method: "DELETE",
                            });

                            setBasket(basketCopy);
                          } else {
                            const basketCopy: BasketItem[] =
                              structuredClone(basket);

                            const match = basketCopy.find(
                              (target) => target.id === item.id
                            );
                            if (!match) return;

                            match.quantity = newQuantity;
                            fetch(`http://localhost:8000/basket/${match.id}`, {
                              method: "PATCH",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({ quantity: newQuantity }),
                            });

                            setBasket(basketCopy);
                          }
                        }}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </p>

                    <p className="basket__price">
                      Item total: €
                      {(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </article>
                </li>
              ))}
            </ul>

            <h2>Your total: €{getTotal().toFixed(2)}</h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Basket;
