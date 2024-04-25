import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img from '../../assets/picture/loginPic.svg';
const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center w-full">
            <img className="w-[600px]" src={img} alt="" />
          </div>
          <div className="card shadow-2xl bg-base-100 w-full md:w-[900px] p-6">
            <h1 className="text-4xl font-semibold mb-3">Login Page</h1>
            <form className="mt-5">
              <input
                type="email"
                placeholder="write your email"
                className="input input-bordered w-full font-semibold"
                required
              />
              <div className="relative">
                <input
                  type={show ? 'text' : 'password'}
                  placeholder="write your password"
                  className="input input-bordered w-full font-semibold my-4"
                  required
                />
                <p onClick={() => setShow(!show)} className="absolute top-8 right-5">{show ? <FaEye /> : <FaEyeSlash />}</p>
              </div>
              <label className="flex flex-col gap-2 items-start pl-1">
                <button className="text-sm font-semibold">forgot password ?</button>
                <p className="text-sm font-medium">don't have an account ? <Link to='/register' className="font-semibold">Register</Link></p>
              </label>
              <input
                type="submit"
                value="Login"
                className="btn btn-success px-10 mt-5"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
