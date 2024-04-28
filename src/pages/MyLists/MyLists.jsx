import { useLoaderData } from "react-router-dom";
import ListItem from "../../components/ListItem/ListItem";
import { useState } from "react";

const MyLists = () => {
  const loaderData = useLoaderData();
  const [datas,setDatas] = useState(loaderData);
  return (
    <div>
      <div className="overflow-x-auto md:px-10 py-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>no</th>
              <th>Tourist Spot Name</th>
              <th>Location</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loaderData.map((item, idx) => (
              <ListItem key={idx} idx={idx} item={item} datas={datas} setDatas={setDatas} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLists;
