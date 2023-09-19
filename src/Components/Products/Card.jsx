// import React from "react";
import { useState, useEffect } from "react";
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
      <div className="max-w-2xl h-full mx-auto">
        <div className="bg-white h-full shadow-md flex flex-col rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <Link
            to={"/product/" + item.title + "/" + item.id}
            className="flex-grow"
          >
            <img
              className="rounded-t-lg h-full p-3"
              src={item.thumbnail}
              alt="product image"
            />
          </Link>
          <div className="px-5 pb-5">
            <Link to={"/product/" + item.title + "/" + item.id}>
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                {item.title}
              </h3>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
              beatae rem repellendus libero inventore rerum recusandae quibusdam
              totam quod tempore mollitia, consectetur dolorem vero dolore
              laudantium illo repellat, sequi voluptates....
            </p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $599
              </span>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
