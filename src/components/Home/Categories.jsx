import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiShoppingCart2Fill } from "react-icons/ri";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/categories?limit=6"
        );
        if (response.status === 200) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  console.log(categories);

  return (
    <div className="container mt-5">
      <div className="row">
        {categories.map((category) => (
          <div key={category.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={category.image}
                className="card-img-top"
                alt={category.name}
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <p className="card-text">{category.description}</p>
                <div className="d-flex gap-2">
                  <a href="#" className="btn btn-primary">
                    View Products
                  </a>
                  <a href="#" className="btn btn-success">
                    <RiShoppingCart2Fill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
