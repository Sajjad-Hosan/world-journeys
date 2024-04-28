import { FaPenToSquare, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2";
import PropTypes from "prop-types";

const ListItem = ({ idx, item, setDatas, datas }) => {
  const { _id, tourists_spot_name, country_name, location } = item;
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
        fetch(`https://world-journeys-server.vercel.app/user-spot/${id}`, {
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
            }
          });
      }
    });
  };
  return (
    <>
        <tr className="hover font-montserrat">
          <th>{idx}</th>
          <td>{tourists_spot_name}</td>
          <td>{location}</td>
          <td>{country_name}</td>
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
ListItem.propTypes = {
  idx: PropTypes.number,
  item: PropTypes.object,
  setDatas: PropTypes.func,
  datas: PropTypes.array,
};
export default ListItem;
