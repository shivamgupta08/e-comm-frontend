import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div className="navbar">
      <img
        className="logo"
        alt="logo"
        src="https://e7.pngegg.com/pngimages/15/271/png-clipart-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-thumbnail.png"
      ></img>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/"> Products </Link>
          </li>
          <li>
            <Link to="/add"> Add Product </Link>
          </li>
          <li>
            <Link to="/update"> Update Product </Link>
          </li>
          <li>
            <Link to="/profile"> Profile </Link>
          </li>
          <li>
            <Link to="/signup" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup"> Sign Up </Link>
          </li>
          <li className="nav-right-first-li">
            <Link to="/login"> Login </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
