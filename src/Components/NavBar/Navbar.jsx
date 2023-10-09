import { Link, useNavigate } from "react-router-dom";
// import style from "./NavBar.module.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const CartItems = useSelector((store) => store.cart.totalProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  console.log(CartItems);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "search", payload: e.target.search.value });
  };

  return (
    <nav className="flex h-24 z-10 fixed w-full top-0 border items-center bg-gray-300 justify-between px-20">
      <div className="flex items-center gap-12">
        <Link to={"/"}>
          <img className="w-24" src="/Asserts/shoe-store.png" alt="" />
        </Link>
      </div>
      <div className="w-1/2">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            className="py-3 rounded-s-md w-3/4 flex-1 focus:outline-none px-5"
            placeholder="Search Product"
          />
          <button className="px-6 py-3 bg-blue-500 text-white rounded-e-md hover:bg-blue-600">
            Search
          </button>
        </form>
      </div>
      <div className="flex gap-7">
        <div>
          <button
            onClick={() => {
              navigate("/cart");
            }}
          >
            <div className="relative">
              <div className="t-0 absolute left-4 -top-2">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  {CartItems || 0}
                </p>
              </div>
              <div>
                <AiOutlineShoppingCart size={35} color="#1D195C" />
              </div>
            </div>
          </button>
        </div>
        {Object.keys(user).length !== 0 ? (
          <button
            onClick={() => {
              dispatch({
                type: "LOG_OUT",
              });
            }}
            className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Log out
          </button>
        ) : (
          <div className="flex gap-1">
            <Link
              to={"/login"}
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
