import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { FaPen } from "react-icons/fa6";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [update, setUpdate] = useState(false);
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
              <FaPen /> Update
            </button>
            <div className="w-44 h-44 rounded-2xl">
              <img
                src={
                  user?.photoURL ||
                  "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg"
                }
              />
            </div>
            {update ? (
              <form className="w-full md:w-1/2 space-y-4">
                <input
                  type="text"
                  defaultValue={user?.displayName || 'no name'}
                  className="input input-bordered w-full font-montserrat font-semibold"
                  placeholder="write your name"
                />
                <input
                  type="email"
                  defaultValue={user?.email || "noemail@nomail.com"}
                  className="input input-bordered w-full font-montserrat font-semibold"
                  placeholder="write your email"
                />
                <input
                  type="text"
                  defaultValue={user?.photoURL || 'no photo url'}
                  className="input input-bordered w-full font-montserrat font-semibold"
                  placeholder="write photoUrl"
                />
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-success btn-outline px-10 font-light"
                />
              </form>
            ) : (
              <div className="flex flex-col gap-3 w-full mt-10">
                <div
                  htmlFor=""
                  className="flex items-center gap-5 font-semibold"
                >
                  Name : <p className="text-2xl">{user.displayName}</p>
                </div>
                <div
                  htmlFor=""
                  className="flex items-center gap-5 font-semibold"
                >
                  Email : <p className="text-2xl">{user.email}</p>
                </div>
              </div>
            )}
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-neutral px-10 font-light">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Profile;
