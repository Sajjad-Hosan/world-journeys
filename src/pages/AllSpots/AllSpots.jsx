import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import UserCard from "../../components/UserCard/UserCard";
import NoData from "../../components/NoData/NoData";
import { Slide, Zoom } from "react-awesome-reveal";

const AllSpots = () => {
  const loaderData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const filter = loaderData.filter((data) => data.emailId === email);
    setEmail(user?.email);
    setDatas(filter);
  }, [email, loaderData]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">

      {datas.length > 0 ? (
      <Zoom damping={0.2}>
       { datas.map((item) => <UserCard key={item._id} tour={item} />)}
      </Zoom>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default AllSpots;
