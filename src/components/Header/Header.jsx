import { Link, NavLink } from "react-router-dom";
import ProfileNav from "../ProfiileNav/ProfileNav";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { FaUser } from "react-icons/fa6";

const Header = () => {
  const { user } = useContext(AuthContext);
  const navLinks = (
    <>
      <li className="mx-3 my-2 font-montserrat">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mx-3 my-2 font-montserrat">
        <NavLink to="/allSpots">All Tourists Spot</NavLink>
      </li>
      <li className="mx-3 my-2 font-montserrat">
        <NavLink to="/addSpot">Add Tourist Spot</NavLink>
      </li>
      <li className="mx-3 my-2 font-montserrat">
        <NavLink to="/myList">My List</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 px-10 py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">World Journeys</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <ProfileNav />
          ) : (
            <Link to="/login" className="btn btn-outline px-10">
              <FaUser /> Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
