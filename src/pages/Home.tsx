import Category from "./MenuCategory";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/home.css";
import "../styles/mainSection.css";

import mainImage from "../assets/images/main-image.png";
import { Product } from "../types";
import { useEffect, useState } from "react";

import pizza from "../assets/images/pizza.png";
import burger from "../assets/images/hamburger.png";
import ProductCard from "../components/ProductCard/ProductCard";

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
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

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
            <Col lg="12" className="text-center">
              <h2>Best of the Best</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => {
                    setCategory("ALL");
                  }}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => {
                    setCategory("BURGER");
                  }}
                >
                  <img src={pizza} alt="" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => {
                    setCategory("PIZZA");
                  }}
                >
                  <img src={burger} alt="" />
                  Pizza
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Home;
