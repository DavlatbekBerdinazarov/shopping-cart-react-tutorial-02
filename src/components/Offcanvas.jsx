import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";

export default function Offcanvas() {
  return (
    <div>
      <span
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <RiShoppingCart2Line className=" fs-4"/>
      </span>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ minWidth: '400px' }}
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">...</div>
      </div>
    </div>
  );
}
