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
        src="https://cdn1.iconfinder.com/data/icons/online-shopping-4-1/64/shop_shopping_cart_add_go-512.png"
      ></img>
      {auth ? (
        <ul className="nav-ul">
          <li className="firstRoute">
            <Link activeStyle={{ backgroundColor: "red" }} to="/">
              {" "}
              Products{" "}
            </Link>
          </li>
          <li>
            <Link activeStyle={{ backgroundColor: "red" }} to="/add">
              {" "}
              Add Product{" "}
            </Link>
          </li>
          {/* <li>
            <Link to="/update"> Update Product </Link>
          </li> */}
          <li className="logoutRoute">
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
