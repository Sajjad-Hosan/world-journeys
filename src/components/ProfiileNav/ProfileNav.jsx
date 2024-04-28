import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Profile from "../Profile/Profile";
import ThemeNav from "../ThemeNav/ThemeNav";
import { Bounce } from "react-awesome-reveal";

const ProfileNav = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleUserLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want To Logout",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser();
        Swal.fire({
          title: "Logout",
          icon: "success",
        });
      }
    });
  };
  const handleProfilePage = () => {
    document.getElementById("profile_page").showModal();
  };
  const handleHandleTheme = () => {
    document.getElementById("theme_page").showModal();
  };
  return (
    <div>
      <div className="absolute">
        <Bounce dumping={0.2}>
        <Profile />
        <ThemeNav/>
        </Bounce>
      </div>
      <div className="dropdown dropdown-end z-10">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              src={
                user.photoURL ||
                "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg"
              }
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={handleProfilePage}>
            <a className="justify-between">Profile</a>
          </li>
          <li onClick={handleHandleTheme}>
            <a className="justify-between">Themes</a>
          </li>
          <li onClick={handleUserLogout}>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileNav;
