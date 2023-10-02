// import React, { useState } from 'react'
import Card from "./Card";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((store) => store.products);
  return (
    <div className=" px-32 py-9 ">
      <div className="margin">
        {/* <h1 className="text-3xl font-semibold">Product</h1> */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-10">
          {products?.map((item, index) => {
            return (
              <div key={item.id}>
                <Card item={item} index={index} />
              </div>
            );
          })}
        </div>
      </div>
      {/* <div>
        <h1 className="text-3xl font-semibold">Laptops</h1>
        <div className="flex flex-wrap gap-6 py-3 justify-center">
          {products?.laptops?.map((item) => {
            return (
              <div key={item.id}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Fragrances</h1>
        <div className="flex flex-wrap gap-6 py-3 justify-center">
          {products.fragrances.map((item) => {
            return (
              <div key={item.id}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Skin Care</h1>
        <div className="flex flex-wrap gap-6 py-3 justify-center">
          {products.skincare.map((item) => {
            return (
              <div key={item.id}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Groceries</h1>
        <div className="flex flex-wrap gap-6 py-3 justify-center">
          {products.groceries.map((item) => {
            return (
              <div key={item.id}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold">Home Decoration</h1>
        <div className="flex flex-wrap gap-6 py-3 justify-center">
          {products.home_decoration.map((item) => {
            return (
              <div key={item.id}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Products;
// flex flex-wrap gap-x-16 gap-y-5 py-3 justify-center
