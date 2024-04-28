import { useContext, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import {
  FaEye,
  FaEyeSlash,
  FaGithub,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/picture/loginPic.svg";
import { AuthContext } from "../../Auth/AuthProvider";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const { loginUser, googlePopup, githubPopup } = useContext(AuthContext);
  const navigate = useNavigate();
  const {state} = useLocation();
  const [show, setShow] = useState(false);
  const handleUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //
    loginUser(email, password)
      .then(() => {
        Swal.fire({
          title: "Login",
          icon: "success",
        });
        navigate(state || "/");
      })
      .catch((e) => {
        Swal.fire({
          title: "Login Error",
          text: `${e.message}`,
          icon: "error",
        });
      });
  };
  const handleGooglePop = () => {
    googlePopup()
      .then((res) => {
        Swal.fire({
          title: "Google Login",
          icon: "success",
        });
        navigate(state || "/");
      })
      .catch((e) => {
        Swal.fire({
          title: "Google Error",
          text: `${e.message}`,
          icon: "error",
        });
      });
  };
  const handleGithubPop = () => {
    githubPopup()
      .then((res) => {
        Swal.fire({
          title: "Github Login",
          icon: "success",
        });
        navigate(state || "/");
      })
      .catch((e) => {
        Swal.fire({
          title: "Github Error",
          text: `${e.message}`,
          icon: "error",
        });
      });
  };
  const handleTwitterPop = () => {
    Swal.fire({
      title: "Twitter Processing",
      icon: "warning",
    });
  };
  return (
    <div>
       <Helmet>
        <title>World Journeys || Login</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center w-full">
            <img className="w-[600px]" src={img} alt="" />
          </div>
          <div className="card shadow-2xl bg-base-100 w-full md:w-[900px] p-6">
            <h1 className="text-4xl font-semibold mb-3">Login Page</h1>
            <form className="mt-5" onSubmit={handleUserLogin}>
              <input
                type="email"
                name="email"
                placeholder="write your email"
                className="input input-bordered w-full font-semibold font-montserrate"
                required
              />
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="write your password"
                  className="input input-bordered w-full font-semibold font-montserrate my-4"
                  required
                />
                <p
                  onClick={() => setShow(!show)}
                  className="absolute top-8 right-5"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </p>
              </div>
              <label className="flex flex-col gap-2 items-start pl-1">
                <button className="text-sm font-semibold">
                  forgot password ?
                </button>
                <p className="text-sm font-medium">
                  don't have an account ?{" "}
                  <Link to="/register" className="font-semibold">
                    Register
                  </Link>
                </p>
              </label>
              <input
                type="submit"
                value="Login"
                className="btn btn-success px-10 mt-5"
              />
            </form>
            <div className="flex gap-5 mt-10 mx-auto">
              <button onClick={handleGooglePop} className="btn btn-success">
                <FaGoogle /> Google
              </button>
              <button onClick={handleGithubPop} className="btn btn-neutral">
                <FaGithub /> Github
              </button>
              <button onClick={handleTwitterPop} className="btn btn-info">
                <FaTwitter /> Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
