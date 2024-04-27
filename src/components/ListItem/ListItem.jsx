import { FaPenToSquare, FaTrash } from "react-icons/fa6";

const ListItem = () => {
  return (
    <>
      <tr className="hover font-montserrat">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <th>
          <button className="btn mx-4 btn-primary tooltip">
            <FaTrash />
          </button>
          <button className="btn btn-neutral">
            <FaPenToSquare />
          </button>
        </th>
      </tr>
    </>
  );
};

export default ListItem;
