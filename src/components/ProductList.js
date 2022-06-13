import React, { useEffect, useState } from "react";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch(
      "https://e-comm-dashboard-backend.herokuapp.com/products",
      {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(
      `https://e-comm-dashboard-backend.herokuapp.com/products/${id}`,
      {
        method: "delete",
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(
        `https://e-comm-dashboard-backend.herokuapp.com/search/${key}`,
        {
          headers: {
            authorization: `bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <div className="product-list">
      <h3>Product List</h3>
      <input
        type=""
        className="search-product-box"
        placeholder="Search Product"
        onChange={searchHandle}
      />
      <ul>
        <li>S. No.</li>
        <li>Name</li>
        <li>Company</li>
        <li>Price</li>
        <li>Category</li>
        <li>Actions</li>
      </ul>
      {products.length ? (
        products.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.company}</li>
            <li>₹ {item.price}</li>
            <li>{item.category}</li>
            <li>
              <button className="mr-5" onClick={() => deleteProduct(item._id)}>
                <FaRegTrashAlt />
              </button>
              <Link to={"/update/" + item._id}>
                <FaRegEdit />{" "}
              </Link>
            </li>
          </ul>
        ))
      ) : (
        <h4>No Result Found</h4>
      )}
    </div>
  );
};

export default ProductList;
