import { useLoaderData } from "react-router-dom";
import ListItem from "../../components/ListItem/ListItem";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const MyLists = () => {
  const loaderData = useLoaderData();
  const {user} = useContext(AuthContext);
  const [email,setEmail] = useState();
  const [datas,setDatas] = useState([]);
  useEffect(() => {
    const filter = loaderData.filter(data => data.emailId === email);
    setEmail(user?.email);
    setDatas(filter);
  },[email])
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
            {datas.map((item, idx) => (
              <ListItem key={idx} idx={idx} item={item} datas={datas} setDatas={setDatas} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLists;
