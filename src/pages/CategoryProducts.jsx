import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { RiShoppingCart2Fill } from "react-icons/ri";
import BounceLoader from "react-spinners/BounceLoader";
import Swal from "sweetalert2"
import { Link, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../layouts/MainLayout";

export default function CategoryProducts() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(6); // Initial limit to 6 products
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#36d7b7");

  const { handleAddToCart } = useContext(ShoppingCartContext);

  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products`
        );
        if (response.status === 200) {
          setProducts(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleShowMore = () => {
    setLimit(limit + 3); // Load 3 more products on each click
  };

  const customAddToCart = (data) => {
    handleAddToCart(data);

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Added to cart successfully"
    });
  }

  const displayedProducts = products.filter(product => product.category.name == name);
  const categoryProducts = displayedProducts.slice(0, limit);


  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  if (loading) {
    return (
      <div className="h-100 p-5">
        <BounceLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <h2 className="mb-4">Products</h2>
        {categoryProducts.map((product) => (
          <div
            key={product.id}
            className="product-card col-md-4 mb-4"
            style={{ height: "500px" }}
          >
            <div className="card">
              <div className="w-100 img-wrapper" style={{ height: "300px" }}>
                <img
                  src={product.images[0]}
                  className="card-img-top w-100 h-100"
                  alt={product.title}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h5 className="card-text">${product.price}</h5>
                <p
                  className="card-text"
                  style={{ height: "60px", overflow: "auto" }}
                >
                  {product.description.split(" ").slice(0, 15).join(" ")}
                  {product.description.split(" ").length > 15 && "..."}
                </p>
                <div className="d-flex gap-2">
                  <Link to={`/product/${product.id}`}>
                    <button className="btn btn-primary">View Product</button>
                  </Link>
                  <button
                    onClick={() => customAddToCart(product)}
                    className="btn btn-success"
                  >
                    <RiShoppingCart2Fill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {products.length > limit && (
        <div className="text-center mt-4">
          <button onClick={handleShowMore} className="btn btn-secondary">
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
