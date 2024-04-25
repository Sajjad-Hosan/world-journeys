import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import img from '../../assets/picture/registerPic.svg';
import { Link } from "react-router-dom";
const Register = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center w-full">
            <img className="w-full md:w-[600px] rounded-lg" src={img} alt="" />
          </div>
          <div className="card shadow-2xl bg-base-100 w-full md:w-[900px] p-6">
            <h1 className="text-4xl font-semibold mb-3">Register Page</h1>
            <form className="mt-5">
              <input
                type="name"
                placeholder="write your name"
                className="input input-bordered w-full font-semibold"
                required
              />
              <input
                type="email"
                placeholder="write your email"
                className="input input-bordered w-full font-semibold mt-4"
                required
              />
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="write your password"
                  className="input input-bordered w-full font-semibold my-4"
                  required
                />
                <p
                  onClick={() => setShow(!show)}
                  className="absolute top-8 right-5"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </p>
              </div>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="write confirm password"
                  className="input input-bordered w-full font-semibold mb-1"
                  required
                />
                <p
                  onClick={() => setShow(!show)}
                  className="absolute top-4 right-5"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </p>
              </div>
              <label className="flex flex-col gap-2 items-start pl-1">
                <p className="text-sm font-medium">
                  already have an account ?
                  <Link to="/login" className="font-semibold">
                    Login
                  </Link>
                </p>
              </label>
              <input
                type="submit"
                value="Register"
                className="btn btn-success px-10 mt-5"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
