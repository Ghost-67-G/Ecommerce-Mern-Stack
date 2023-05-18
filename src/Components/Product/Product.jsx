import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoIosStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const param = useParams();
  const product = useSelector((store) =>
    Object.values(store.products)
      .flat(1)
      .find((item) => item.id == param.id)
  );
  // product.qty = 1;
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const isproduct = useSelector(store=>store.cart.products.find((item)=>item.id==param.id))
  useEffect(()=>{

    if(isproduct){
      setDisabled(true);
    }
  },[])


  let [changer, setChanger] = useState(0);
  setInterval(() => {
    if (changer == product.images.length - 1) {
      setChanger(0);
    } else {
      changer++;
      setChanger(changer);
    }
  }, 3000);
  return (
    <div className="max-w-7xl margin mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <div>
            <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                <img src={product.images[changer]} className="h-full" alt="" />
                {/* <span className="text-5xl">1</span> */}
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-1 px-4">
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            {product.title}
          </h2>
          <p className="text-gray-500 text-sm">
            By
            <a href="#" className="text-indigo-600 hover:underline">
              &nbsp;
              {product.brand}
            </a>
          </p>
          <div className="flex items-center space-x-4 my-4">
            <div>
              <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                <span className="text-indigo-400 mr-1 mt-1">$</span>
                <span className="font-bold text-indigo-600 text-3xl">
                  {product.price}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-green-500 text-xl font-semibold">
                Save {product.discountPercentage}%
              </p>
              <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
            </div>
            <p className="flex items-center">
              Ratings &nbsp;{" "}
              <span className="text-xl text-yellow-500">{product.rating}</span>{" "}
              <IoIosStar size={25} color="gold" />
            </p>
          </div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            rerum ab velit natus enim quidem adipisci necessitatibus, at nobis
            mollitia provident repudiandae officiis, ad, a vel aperiam quo
            repellat quas!
          </p>
          <div className="flex py-4 space-x-4">
            <div className="flex items-center">
              {/* <div className="text-center text-xs uppercase  rounded-xl border border-gray-200 text-gray-400  font-semibold">
                Qty
                <input
                  type="text"
                  disabled
                  value={qty}
                  className="w-20 text-2xl flex text-center pb-1"
                />
              </div> */}
              {/* <div>
                <button
                disabled={disabled}
                onClick={() =>{
                    if(qty==product.stock){
                        return
                    }else{
                        qty++
                        setQty(qty)
                    }
                } 
                }>
                  <IoIosArrowUp size={20} />
                </button>
                <br />
                <button
                disabled={disabled}
                  onClick={() => {
                    if (qty == 1) {
                      return;
                    } else {
                        qty--
                      setQty(qty);
                    }
                  }}
                >
                  <IoIosArrowDown size={20} />
                </button>
              </div> */}
              {/* <select className="">

            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select> */}
            </div>
            <button
              type="button"
              disabled={disabled}
              onClick={() => {
                setDisabled(true);
                dispatch({
                  type: "Cart-Item",
                  payload: product,
                });
              }}
              className={
                "h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
              }
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                if (disabled) {
                  navigate("/cart");
                } else {
                  dispatch({
                    type: "Cart-Item",
                    payload: product,
                  });
                  navigate("/cart");
                }
              }}
              className={
                "h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
              }
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
