import { Link, useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const CartItems = useSelector(store=>store.cart.totalProducts)
  const navigate = useNavigate()
  const  dispatch = useDispatch()
  const  user = useSelector(store=>store.user)
  return (
    <nav className="flex h-24 fixed w-full top-0 border items-center bg-gray-400 justify-between px-20">
      <div className="flex items-center gap-12">
        <Link to={"/"}>
        <img className="w-44" src="./Asserts/shoe-store.png" alt="" />
        </Link>
      </div>
      <div className="w-2/4 flex">
        <input type="text"  className="py-3 flex-1 focus:outline-none px-5" placeholder="Search Product" />
        <button className="bg-indigo-500 px-10 text-white">Search</button>
      </div>
      <div className="flex gap-7">
        <div>
            <button onClick={()=>{navigate("/cart")}}>
          <div className="relative">
            <div className="t-0 absolute left-4 -top-2">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                {CartItems}
              </p>
            </div>
              <div>
              <AiOutlineShoppingCart size={35} color="#1D195C" />
              </div>
          </div>
            </button>
        </div>
          {Object.keys(user).length !== 0?
          <button onClick={()=>{
            dispatch({
              type:"LOG_OUT"
            })
          }} className={`${style.button}`}>Log out</button>
        :
        <div className="flex gap-1">
          <Link to={"/login"} className={`${style.button}`}>Login</Link>
          <Link to={"/signup"} className={`${style.button}`}>
            Sign up
            <div className={`${style.arrow_wrapper}`}>
              <div className={`${style.arrow}`}></div>
            </div>
          </Link>
        </div>
          }
      </div>
    </nav>
  );
};

export default Navbar;
