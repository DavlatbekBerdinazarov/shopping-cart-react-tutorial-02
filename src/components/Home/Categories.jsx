import React, { useEffect, useState } from "react";
import axios from "axios";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#36d7b7");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/categories?limit=6"
        );
        if (response.status === 200) {
          setCategories(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  if (loading) {
    return (
      <div className="h-100 p-5">
        <ClimbingBoxLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <h2 className="mb-4">Kategoriyalar</h2>
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
