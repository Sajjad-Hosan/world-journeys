import Swal from "sweetalert2/dist/sweetalert2.js";

import {
  FaEye,
  FaEyeSlash,
  FaGithub,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa6";
import { useContext, useState } from "react";
import img from "../../assets/picture/registerPic.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const { createUser, googlePopup, githubPopup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleUserRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    const user = { name, email, password, photoUrl };
    //
    if (password.length < 6) {
      Swal.fire({
        title: "length",
        text: "password must have 6 character!",
        icon: "warning",
      });
      return;
    } else if (!/[0-9]/.test(password)) {
      Swal.fire({
        title: "Number",
        text: "password must have 1 Number!",
        icon: "warning",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        title: "Uppercase",
        text: "password must have 1 uppercase character!",
        icon: "warning",
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      Swal.fire({
        title: "Lowercase",
        text: "password must have 1 lowercase character!",
        icon: "warning",
      });
      return;
    }
    //
    createUser(email, password)
      .then((data) => {
        console.log(data);
        updateProfile(data.user, {
          displayName: name,
          photoURL: photoUrl,
        });
        Swal.fire({
          title: "Register Complete!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((e) => {
        Swal.fire({
          title: "Register Error",
          Text: e.message,
          icon: "error",
        });
      });
    //
    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {console.log(data)});
  };
  const handleGooglePop = () => {
    googlePopup()
      .then((res) => {
        Swal.fire({
          title: "Google Login",
          icon: "success",
        });
      })
      .catch((e) => {
        Swal.fire({
          title: "Google Error",
          Text: e.message,
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
      })
      .catch((e) => {
        Swal.fire({
          title: "Github Error",
          Text: e.message,
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
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="text-center w-full">
            <img className="w-full md:w-[600px] rounded-lg" src={img} alt="" />
          </div>
          <div className="card shadow-2xl bg-base-100 w-full md:w-[900px] p-6">
            <h1 className="text-4xl font-semibold mb-3">Register Page</h1>
            <form className="mt-5" onSubmit={handleUserRegister}>
              <input
                type="name"
                name="name"
                placeholder="write your name"
                className="input input-bordered w-full font-semibold"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="write your email"
                className="input input-bordered w-full font-semibold mt-4"
                required
              />
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
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
              <input
                type="text"
                name="photoUrl"
                placeholder="give photo url here"
                className="input input-bordered w-full font-semibold mb-1"
              />
              <label className="text-sm flex items-center mt-3">
                <input className="mr-2" type="checkbox" />
                accepted terms and condition
              </label>
              <p className="text-sm font-medium mt-2">
                already have an account ?
                <Link to="/login" className="font-semibold">
                  Login
                </Link>
              </p>
              <input
                type="submit"
                value="Register"
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

export default Register;
