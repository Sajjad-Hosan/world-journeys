import { useContext, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Tooltip } from "react-tooltip";
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
import { Bounce, Slide } from "react-awesome-reveal";
const Login = () => {
  const { loginUser, googlePopup, githubPopup } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
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
          <Slide>
            <div className="text-center w-full">
              <img className="w-[600px]" src={img} alt="" />
            </div>
          </Slide>
          <div className="card w-full md:w-[900px] p-6">
            <h1 className="text-4xl font-semibold mb-3">Login Page</h1>
            <form className="mt-5" onSubmit={handleUserLogin}>
              <Bounce dumping={0.1} className="w-[400px] md:w-[600px]">
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
                  className="btn btn-success px-10 mt-5 text-white font-light"
                />
              </Bounce>
            </form>
            <div className="flex gap-5 mt-10 mx-auto">
              <Bounce dumping={0.2}>
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Google"
                  onClick={handleGooglePop}
                  className="btn btn-success text-white"
                >
                  <FaGoogle />
                </a>
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Github"
                  onClick={handleGithubPop}
                  className="btn btn-neutral"
                >
                  <FaGithub />
                </a>
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Twitter"
                  onClick={handleTwitterPop}
                  className="btn btn-info text-white"
                >
                  <FaTwitter />
                </a>
                <Tooltip id="my-tooltip" />
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
