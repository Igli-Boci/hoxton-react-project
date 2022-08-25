import Category from "./MenuCategory";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/home.css";
import "../styles/mainSection.css";

import mainImage from "../assets/images/main-image.png";
import { Product } from "../types";
import { useEffect, useState } from "react";

const featuresData = [
  {
    title: "Fast Delivery",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, fugit.",
  },
  {
    title: "Amazing Place",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, fugit.",
  },
  {
    title: "Excellent Service",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, fugit.",
  },
];

function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);

  if (products === null) return <h2>Loading...</h2>;
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="mainSection__content">
                <h5 className="mb-3">Grab The Bite</h5>
                <h1 className="mb-4 mainSection__title">
                  <span>What you crave is what you get!</span> Pizzas and
                  Burgers. <span>Outta this world!</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, cum. Lorem ipsum dolor sit amet consectetur.
                </p>

                <div className="mainSection__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="menu-btn">
                    <Link to="/menu">See The Menu</Link>
                  </button>
                </div>
                <div className="mainSection__service d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="checkout__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    Free delivery
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="checkout__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="mainSection__img">
                <img src={mainImage} alt="main-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">Preparing your food</h5>
              <h2 className="feature__title">
                Only with the best, fresh ingredients
              </h2>
              <h2 className="feature__title">
                <span>We got you!</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, inventore. Minima nesciunt aperiam eveniet!
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur, excepturi.
              </p>
            </Col>

            {featuresData.map((item, index) => (
              <Col lg="4" md="4" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {products.map((products) => (
              <Col lg="3" md="4" className="mt-5">
                <div className="product__item">
                  <div className="product__img">
                    <img
                      src={products.image}
                      alt="product-img"
                      className="w-50"
                    />
                  </div>

                  <div className="product__content">
                    <h5>
                      <Link to={`/menu/${products.id}`}>{products.title}</Link>
                    </h5>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="product__price">€{products.price}</span>
                      <button className="addTOCart__btn">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Home;
