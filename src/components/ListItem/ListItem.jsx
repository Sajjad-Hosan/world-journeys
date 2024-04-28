import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2";

const ListItem = ({ idx, item, setDatas, datas }) => {
  const { _id, spotName, countryName, locationName } = item;
  const navigate = useNavigate();
  const handleDeleteSpot = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/user-spot/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Spot has been deleted.",
                icon: "success",
              });
              const remaining = datas.filter((item) => item._id !== id);
              setDatas(remaining);
              // navigate('/');
            }
          });
      }
    });
  };
  return (
    <>
      <tr className="hover font-montserrat">
        <th>{idx}</th>
        <td>{spotName}</td>
        <td>{locationName}</td>
        <td>{countryName}</td>
        <th className="flex flex-col md:flex-row gap-2 md:gap-4">
          <button
            onClick={() => handleDeleteSpot(_id)}
            className="btn btn-sm md:btn-md btn-primary"
          >
            <FaTrash />
          </button>
          <Link
            to={`/update-user-spot/${_id}`}
            className="btn btn-sm md:btn-md btn-neutral"
          >
            <FaPenToSquare />
          </Link>
        </th>
      </tr>
    </>
  );
};

export default ListItem;
