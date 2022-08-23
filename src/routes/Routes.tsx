import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import FoodMenu from "../pages/FoodMenu";
import FoodDetails from "../pages/FoodDetails";
import Basket from "../pages/Basket";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<FoodMenu />} />
      <Route path="/menu/:id" element={<FoodDetails />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
export default Routers;
