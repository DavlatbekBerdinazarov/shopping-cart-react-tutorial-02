import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        if (response.status === 200) {
          setProduct(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }
    fetchProduct();
  }, []);

  const { description, images, price, title, updatedAt } = product;

  if (loading) {
    return <h1>Loading...</h1>
  }


  console.log(product)

  return (
    <section className="container my-4">
    <div className="row">
      <div className="col-md-6">
        <img src={images ? images[0] : ''} alt={title} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Last Updated: {updatedAt}</span>
          <h5 className="m-0">Price: ${price}</h5>
        </div>
        {/* Add buttons or other product details here */}
      </div>
    </div>
  </section>
  )
}
