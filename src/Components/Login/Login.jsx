import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Login = () => {
  const form = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [exist,setExist] = useState(false)
  const [pass,setPass] = useState(false)




  const login = (data1) => {
    let data = JSON.stringify(data1);
    axios.get(`/login?data=${data}`).then((resp) => {
      if (resp.data.success) {
        dispatch({
          type: "LOGIN",
          payload: resp.data.user,
        });
        navigate("/")
      }else if(resp.data.userNotExist){
        setExist(true)
        setPass(false)
      }else{
        setExist(false)
        setPass(true)
      }
    });
  };
  return (
    <div>
      <>
        <div className="h-screen flex">
          <div
            className="hidden lg:flex w-full lg:w-1/2 login_img_section
      justify-around items-center"
          >
            <div
              className=" 
              bg-black 
              opacity-20 
              inset-0 
              z-0"
            ></div>
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
              <h1 className="text-white font-bold text-4xl font-sans">
                Simple App
              </h1>
              <p className="text-white mt-1">The simplest app to use</p>
              <div className="flex justify-center lg:justify-start mt-6">
                <a
                  href="#"
                  className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
            <div className="w-full px-8 md:px-32 lg:px-24">
              <form
                onSubmit={form.handleSubmit(login)}
                className="bg-white rounded-md shadow-2xl p-5"
              >
                <h1 className="text-gray-800 font-bold text-2xl mb-1">
                  Hello Again!
                </h1>
                <p className="text-sm font-normal text-gray-600 mb-8">
                  Welcome Back
                </p>
                {exist?
                  <p className="text-red-500  ms-5">This Email does't exist. Please create account</p>
                :null}
                <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                  <span className="text-gray-500 text-xl">@</span>
                  <input
                    {...form.register("user_email", { required: true })}
                    className=" pl-2 w-full outline-none border-none"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
                {pass?
                  <p className="text-red-500 ms-5">Wrong Password</p>
                :null}
                <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                  <input
                    {...form.register("user_password", { required: true })}
                    className="pl-2 w-full outline-none border-none"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                >
                  Login
                </button>
                <div className="flex justify-between mt-4">
                  <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                    Forgot Password ?
                  </span>
                  <Link
                    to={"/signup"}
                    className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                  >
                    Don't have an account yet?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
