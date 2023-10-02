// import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Card = ({ item, index }) => {
  console.log(item);
  // item.qty = 1
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const isproduct = useSelector((store) =>
    store.cart?.products?.find((item1) => item1.id == item.id)
  );
  useEffect(() => {
    if (isproduct) {
      setDisabled(true);
    }
  }, []);

  return (
    <>
      <div className="bg-gray-300 p-4 shadow-md rounded-lg">
        <Link
          to={"/product/" + item.title + "/" + item.id}
          className="flex-grow"
        >
          <img
            className="mb-4 w-full h-40 object-cover"
            src={item.thumbnail}
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-5">
          <Link to={"/product/" + item.title + "/" + item.id}>
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </Link>{" "}
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
          {/* <div className="flex items-center justify-between">
            <button
              // href="#"
              onClick={() => {
                setDisabled(true);
                dispatch({ type: "Cart-Item", payload: item });
              }}
              // bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
              className={
                disabled
                  ? "hidden"
                  : `bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center`
              }
            >
              Add to cart
            </button>
            <button
              // href="#"
              onClick={() => {
                setDisabled(false);
                dispatch({ type: "Remove-Item", payload: { item, index } });
              }}
              // bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
              className={
                disabled
                  ? "text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300"
                  : "hidden"
              }
            >
              Remove from Cart
            </button>
          </div> */}
          <div className="flex justify-between">
            <Link
              // to={`/product-detail/${item.id}`}
              to={"/product/" + item.title + "/" + item.id}
              className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600"
            >
              View Details
            </Link>
            <button
              disabled={disabled}
              onClick={() => {
                setDisabled(true);
                dispatch({ type: "Cart-Item", payload: item });
              }}
              className={`mt-4 inline-block px-3 py-2 bg-gray-500 disabled:bg-gray-400 rounded-2xl hover:bg-gray-600`}
            >
              <AiOutlineShoppingCart
                size={27}
                className={disabled? "text-gray-700":" text-white "}
                // color="rgb(37 99 235 / var(--tw-bg-opacity))"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
