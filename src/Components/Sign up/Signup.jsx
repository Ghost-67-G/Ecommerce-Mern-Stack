import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const form = useForm();
  const navigate = useNavigate()
  const signup = (data) => {
    data.order = []
    data.cart = {}
    axios.post("/signup",data).then((resp)=>{
      form.reset()
      navigate('/verify/email')
    })
  };

  return (
    <div>
      <div className="flex min-h-screen bg-white">
        <div
          className="w-1/2 bg-cover md:block hidden"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
          }}
        />
        {/* <div class="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 overflow-hidden">
      <img src="log_in.webp" alt="hey">
  </div> */}
        <div className="md:w-1/2 px-5 max-w-lg mx-auto flex items-center justify-center flex-col">
          <div className="text-left p-0 font-sans">
            <h1 className=" text-gray-800 text-3xl font-medium">
              Create an account for free
            </h1>
            <h3 className="p-1 text-gray-700">
              Free forever. No payment needed.
            </h3>
          </div>
          <form onSubmit={form.handleSubmit(signup)} className="p-0">
            <div className="mt-5">
              {/* <label for="email" class="sc-bqyKva ePvcBv">Email</label> */}
              <input
                {...form.register("user_name", { required: true })}
                type="text"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                placeholder="User-name"
              />
              {form.formState.errors.user_name ? (
                <p className="text-red-500 text-sm">Please enter the user-name</p>
              ) : null}
            </div>
            <div className="mt-5">
              <input
                type="email"
                {...form.register("user_email", { required: true })}
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
                placeholder="Email"
              />
              {form.formState.errors.user_email ? (
                <p className="text-red-500 text-sm">Please enter valid email</p>
              ) : null}
            </div>
            <div className="mt-5">
              <input
                {...form.register("user_password", { required: true, minLength: 6 })}
                type="password"
                className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
                placeholder="Password"
              />
              {form.formState.errors.user_password ? (
                <p className="text-red-500 text-sm">Password length must be 6 </p>
              ) : null}
            </div>
            <div className="mt-6 block p-5 text-sm md:font-sans text-gray-800">
              <input
                type="checkbox"
                {...form.register("terms", { required: true })}
                className="inline-block border-0  "
              />
              <span display="inline">
                By creating an account you are agreeing to our
                <a href="/s/terms" target="_blank" data-test="Link">
                  <span className="underline ">Terms and Conditions</span>{" "}
                </a>{" "}
                and
                <a href="/s/privacy" target="_blank" data-test="Link">
                  <span className="underline">Privacy Policy</span>{" "}
                </a>
              </span>
               {form.formState.errors.Terms ? (
                <p className="text-red-500 text-sm">Please accept the terms </p>
              ) : null}
            </div>
            <div className="mt-10">
              <input
                type="submit"
                defaultValue="Sign up with email"
                className="py-3 bg-indigo-500 text-white w-full rounded hover:bg-indigo-600"
              />
            </div>
          </form>
          <Link to="/login">
            <span className="block  p-5 text-center text-gray-800  text-xs ">
              Already have an account?
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
