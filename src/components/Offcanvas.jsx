import React, { useContext } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import SelectedCarts from "./cart/SelectedCarts";
import { ShoppingCartContext } from "../layouts/MainLayout";

export default function Offcanvas() {

  const { totalPrice, cartData } = useContext(ShoppingCartContext)

  return (
    <div>
      <span
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <div className=" position-relative">
          <RiShoppingCart2Line className=" fs-4"/>
         {cartData.length > 0 && <div className="bg-primary rounded-circle d-flex justify-content-center align-items-center text-white position-absolute" style={{ width:'17px', height:'17px', fontSize:'14px', right: '-7px', top: '3px' }}> {cartData.length}</div>}
        </div>
      </span>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ minWidth: '500px' }}
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">My Cart</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">

          <SelectedCarts/>

          <div className=" d-flex justify-content-between">
            <h3>Total:</h3>
            <h3>${totalPrice}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
