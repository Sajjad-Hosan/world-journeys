import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { FaArrowLeft, FaPen } from "react-icons/fa6";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2/dist/sweetalert2";
import { Bounce } from "react-awesome-reveal";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [update, setUpdate] = useState(false);
  const handleUserUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    //
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        Swal.fire({
          title: "Update Profile",
          icon: "success",
        });
        setUpdate(!update);
      })
      .catch((e) => {
        Swal.fire({
          title: "Update Error",
          text: { e },
          icon: "error",
        });
      });
  };
  return (
    <>
      <dialog id="profile_page" className="modal relative overflow-hidden">
        <div className="modal-box max-w-5xl flex flex-col ">
          <h1 className="text-2xl">{update ? "Update Profile" : "Profile"}</h1>
          <div className="flex flex-col gap-5 items-center">

            <button
              onClick={() => setUpdate(!update)}
              className="absolute top-7 right-8 btn btn-primary btn-outline px-10 font-light"
              >
              {update ? (
                <>
                  <FaArrowLeft /> Back
                </>
              ) : (
                <>
                  <FaPen /> Update
                </>
              )}
            </button>
            <div className="mt-12 w-48 h-48 rounded-2xl overflow-hidden">
              <img
                src={
                  user?.photoURL ||
                  "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg"
                }
              />
            </div>
            {update ? (
              <form
                onSubmit={handleUserUpdate}
                className="w-full md:w-1/2 space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName || "no name"}
                  className="input input-bordered w-full font-montserrat font-semibold"
                  placeholder="write your name"
                />
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email || "noemail@nomail.com"}
                  className="input input-bordered w-full font-montserrat font-semibold"
                  placeholder="write your email"
                  readOnly
                />
                <input
                  type="text"
                  name="photoUrl"
                  defaultValue={user?.photoURL || "no photo url"}
                  className="input input-bordered w-full font-montserrat font-semibold"
                  placeholder="write photoUrl"
                />
                <Bounce>
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-neutral px-10 font-light"
                  />
                  </Bounce>
              </form>
            ) : (
              <div className="flex flex-col gap-3 w-full mt-10">
                <div className="flex items-center gap-5 font-semibold">
                  Name : <p className="text-2xl">{user?.displayName}</p>
                </div>
                <div className="flex items-center gap-5 font-semibold">
                  Email : <p className="text-2xl">{user?.email}</p>
                </div>
              </div>
            )}
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-neutral px-10 font-light">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Profile;
