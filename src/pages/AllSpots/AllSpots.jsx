import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import UserCard from "../../components/UserCard/UserCard";

const AllSpots = () => {
  const loaderData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const filter = loaderData.filter((data) => data.emailId === email);
    setEmail(user?.email);
    setDatas(filter);
  }, [email]);
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {datas.map((item) => (
        <UserCard key={item._id} tour={item} />
      ))}
    </div>
  );
};

export default AllSpots;
