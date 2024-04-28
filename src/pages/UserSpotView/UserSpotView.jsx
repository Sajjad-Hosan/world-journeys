import { Link, useLoaderData } from "react-router-dom";

const UserSpotView = () => {
  const data = useLoaderData();
  const {
    _id,
    image,
    tourists_spot_name,
    country_Name,
    location,
    description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
  } = data;
  return (
    <div className="my-18">
      <div className="card card-side">
        <div className="w-[550px] h-[500px] rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={
              image ||
              "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            }
            alt=""
          />
        </div>
        <div className="px-10 py-8 w-[50%] font-montserrat space-y-3">
          <div className="w-full flex items-center justify-between">
            <h2 className="card-title text-4xl font-semibold">
              {tourists_spot_name} <p className="font-pacifico">({location})</p>
            </h2>
            <p className="text-xl font-pacifico">{travel_time}</p>
          </div>
          <h2 className="text-xl font-medium">Country: {country_Name}</h2>
          <p className="text-sm">{description}</p>
          <p className="text-xl font-semibold font-pacifico">{average_cost}</p>
          <p className="text-xl font-semibold font-pacifico">
            Visitors Per Year : {totalVisitorsPerYear}
          </p>
          <p className="text-xl font-semibold">seasonality: {seasonality}</p>
          <div className="card-actions justify-end">
            <Link to={`/update-user-spot/${_id}`} className="btn btn-neutral px-12 font-pacifico font-light">Update</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSpotView;
