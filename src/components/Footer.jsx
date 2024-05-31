import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-dark text-light py-5">
      <div className="container-css">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">About Us</h5>
            <p>
              We are a leading e-commerce store providing a wide range of products.
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/home" className="text-light text-decoration-none">Home</a>
              </li>
              <li className="mb-2">
                <a href="/shop" className="text-light text-decoration-none">Shop</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-light text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-light text-decoration-none">Contact</a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="text-light text-decoration-none">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Customer Service</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/shipping" className="text-light text-decoration-none">Shipping Policy</a>
              </li>
              <li className="mb-2">
                <a href="/returns" className="text-light text-decoration-none">Returns Policy</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/terms" className="text-light text-decoration-none">Terms & Conditions</a>
              </li>
              <li className="mb-2">
                <a href="/support" className="text-light text-decoration-none">Support</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex">
              <a href="https://facebook.com" className="text-light me-3">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-light me-3">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-light me-3">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-light me-3">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 border-top border-secondary pt-3 text-center">
          <p>&copy; 2024 Your E-Commerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
