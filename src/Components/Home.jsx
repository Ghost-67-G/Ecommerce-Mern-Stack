import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
// import ImageSlider from "./ImageSlider";

const Home = () => {
  return (
    <>
      <div className="margin"/>
      <ImageSlider />
      <div className="bg-gray-100">
        <section className="py-16 text-center">
          <h1 className="text-4xl font-semibold mb-4">
            Welcome to My Ecommerce Store
          </h1>
          <p className="text-gray-600">
            Discover our wide range of products for all your needs.
          </p>
          <Link
            to="/products" // Corrected route path
            className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Shop Now
          </Link>
        </section>

        {/* Other sections with appropriate Tailwind classes */}
      </div>
    </>
  );
};

export default Home
