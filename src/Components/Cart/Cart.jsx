import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";

const Cart = () => {
  let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  console.log(cart);
  return (
    <div>
      {cart.totalProducts ? (
        <div className="h-screen bg-gray-100 pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center h-2/3 px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg overflow-y-scroll h-full md:w-2/3">
              {cart.products.map((item,index) => {
                return (
                  <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img
                      src={item.thumbnail}
                      alt="product-image"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {item.title}
                        </h2>
                        <p className="mt-1 text-xs text-gray-700">
                          {item.brand}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <button onClick={()=>{
                            if(item.qty==1){
                              return
                            }else{

                              dispatch({
                                type:"decrement",
                                payload:index
                              })
                            }
                          }} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                            -
                          </button>
                          <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value={item.qty}
                            disabled
                          />
                          <button onClick={()=>{
                            if(item.qty==item.stock){
                              return
                            }else{

                              dispatch({
                                type:"Increment",
                                payload:index
                              })
                            } 
                          }} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                            +
                          </button>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">${item.price * item.qty}.00</p>
                          <button
                            onClick={() => {
                              console.log(item)
                              dispatch({
                                type: "Remove-Item",
                                payload: item,
                              });
                            }}
                          >
                            <BsFillTrashFill />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
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
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-5xl py-16">Your Cart is Empty</h1>
          <Link
            to="/"
            className="bg-green-700 font-semibold text-white p-3 rounded-lg"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
