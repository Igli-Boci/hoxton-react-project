import React, { useRef } from "react";

import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import "../../styles/header.css";

import logo from "../../assets/images/the-bite-logo.png";

const navlinks = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Menu",
    path: "/menu",
  },
  {
    display: "Basket",
    path: "/basket",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

function Header() {
  const menu = useRef(null);
  const toggleMenu = () => menu.current.classList.toggle("show__menu");
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="navigation" ref={menu} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {navlinks.map((item, index) => (
                <NavLink
                  onClick={toggleMenu}
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="nav__rightMenu d-flex align-items-center gap-4">
            <span className="basket__icon">
              <i className="ri-shopping-basket-2-line"></i>
              <span className="basket__quantity">2</span>
            </span>
            <span className="user">
              <Link to="/login">
                <i className="ri-user-6-fill"></i>
              </Link>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}
export default Header;
