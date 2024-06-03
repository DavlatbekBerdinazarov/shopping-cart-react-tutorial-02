import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdClose } from "react-icons/io";
import { ShoppingCartContext } from "../../layouts/MainLayout";

export default function SelectedCarts() {
  const { cartData, setCartData } = useContext(ShoppingCartContext);

  const incrementQuantity = (id) => {
    setCartData((prevCartData) =>
      prevCartData.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartData((prevCartData) =>
      prevCartData.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setCartData((prevCartData) =>
      prevCartData.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="container mt-5">
      {cartData.map((product) => (
        <div key={product.id} className="mb-3 border">
          <div className="d-flex mb-3 align-items-center">
            <img
              src={product.images[0]}
              alt={product.title}
              style={{ width: "124px", height: "80px" }}
              className="me-3"
            />
            <div className="w-100 d-flex justify-content-between">
              <div>
                <h5>{product.title}</h5>
                <p>${product.price.toFixed(2)}</p>
              </div>
              <div>
                <button className="btn btn-outline-danger" onClick={() => removeProduct(product.id)}>
                  <IoMdClose className="fs-5" />
                </button>
                <h6 className="mt-2">${(product.price * product.quantity).toFixed(2)}</h6>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-secondary me-2"
              onClick={() => decrementQuantity(product.id)}
            >
              -
            </button>
            <span>{product.quantity}</span>
            <button
              className="btn btn-outline-secondary ms-2"
              onClick={() => incrementQuantity(product.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
