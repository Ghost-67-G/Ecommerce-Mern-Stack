import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const checkOut = () => {
    dispatch({ type: "CHECKOUT" });
  };
  return (
    <div className="margin min-h-[37vh]">
      {cart.totalProducts ? (
        <div className="h-screen bg-gray-100 pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center h-2/3 px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg overflow-y-scroll h-full md:w-2/3">
              {cart.products.map((item, index) => {
                return <Card item={item} index={index} />;
              })}
            </div>
            {/* Sub total */}
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">${cart.totalPrice}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    ${cart.totalPrice + 4} USD
                  </p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <button
                onClick={checkOut}
                className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
              >
                Check out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-center margin">
            <h1 className="text-5xl py-16">Your Cart is Empty</h1>
            <Link
              to="/"
              className="bg-green-700 font-semibold text-white p-3 rounded-lg"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
