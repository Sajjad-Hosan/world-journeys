import { FaPenToSquare, FaTrash } from "react-icons/fa6";

const ListItem = () => {
  return (
    <>
      <tr className="hover font-montserrat">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <th className="flex flex-col md:flex-row gap-2 md:gap-4">
          <button className="btn btn-sm md:btn-md btn-primary">
            <FaTrash />
          </button>
          <button className="btn btn-sm md:btn-md btn-neutral">
            <FaPenToSquare />
          </button>
        </th>
      </tr>
    </>
  );
};

export default ListItem;
