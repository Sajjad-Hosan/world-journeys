import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2";

const UserSpotUpdate = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    spotName,
    countryName,
    locationName,
    shortDes,
    description,
    avgCost,
    travelTime,
    photoUrl,
    seasonality,
    totalVisitor,
    userName,
    userEmail,
  } = data;
  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const spotName = form.spot_name.value;
    const countryName = form.Country_name.value;
    const locationName = form.location_name.value;
    const shortDes = form.short_des.value;
    const description = form.description.value;
    const avgCost = form.avg_cost.value;
    const travelTime = form.travel_time.value;
    const photoUrl = form.photoUrl.value;
    const seasonality = form.seasonality.value;
    const totalVisitor = form.total_visitor.value;
    const userName = form.user_name.value;
    const userEmail = form.user_email.value;
    const touristsDetails = {
      spotName,
      countryName,
      locationName,
      shortDes,
      description,
      avgCost,
      travelTime,
      photoUrl,
      seasonality,
      totalVisitor,
      userName,
      userEmail,
    };
    //
    fetch(`http://localhost:4000/user-spot/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(touristsDetails),
    });
    Swal.fire({
      title: "Create",
      text: "Data has added to database!",
      icon: "success",
    });
    navigate(-1);
    form.reset();
  };
  return (
    <div className="px-8 py-4">
      <h1 className="text-4xl font-semibold">Add Tourists Spot</h1>
      <form
        onSubmit={handleAddSpot}
        className="md:grid md:grid-cols-2 gap-5 md:px-10 py-5 my-5 font-montserrat"
      >
        <input
          type="text"
          name="spot_name"
          defaultValue={spotName}
          placeholder="tourists spot name"
          className="input input-bordered w-full font-medium "
        />
        <div className="flex flex-col md:flex-row gap-5 my-5 md:my-0">
          <input
            type="text"
            name="Country_name"
          defaultValue={countryName}
            placeholder="country name"
            className="input input-bordered w-full font-medium "
          />
          <input
            type="text"
            name="location_name"
            defaultValue={locationName}
            placeholder="location name"
            className="input input-bordered w-full font-medium "
          />
        </div>
        <input
          type="text"
          name="short_des"
          defaultValue={shortDes}
          placeholder="short description"
          className="input input-bordered w-full font-medium "
        />
        <div className="flex flex-col md:flex-row gap-5 my-5 md:my-0">
          <input
            type="text"
            name="avg_cost"
          defaultValue={avgCost}
            placeholder="average cost"
            className="input input-bordered w-full font-medium "
          />
          <input
            type="text"
            name="travel_time"
          defaultValue={travelTime}
            placeholder="travel time"
            className="input input-bordered w-full font-medium "
          />
        </div>
        <input
          type="text"
          name="photoUrl"
          defaultValue={photoUrl}
          placeholder="photoUrl"
          className="input input-bordered w-full font-medium "
        />
        <div className="flex flex-col md:flex-row gap-5 my-5 md:my-0">
          <input
            type="text"
            name="seasonality"
          defaultValue={seasonality}
            placeholder="seasonality names"
            className="input input-bordered w-full font-medium "
          />
          <input
            type="text"
            name="total_visitor"
          defaultValue={totalVisitor}
            placeholder="total visitor per year"
            className="input input-bordered w-full font-medium "
          />
        </div>
        <input
          type="text"
          name="user_name"
          defaultValue={userName}
          placeholder="write your username"
          className="input input-bordered w-full font-medium "
        />
        <input
          type="text"
          name="user_email"
          defaultValue={userEmail}
          placeholder="write your email"
          className="input input-bordered w-full font-medium  mt-5 md:mt-0"
        />
        <textarea
          name="description"
          className="w-full col-span-2 textarea textarea-bordered mt-5"
          defaultValue={description}
          placeholder="description..."
        ></textarea>
        <div className="col-span-2 mx-auto my-5">
          <input
            type="submit"
            value="Add Spot"
            className="btn btn-neutral px-10"
          />
        </div>
      </form>
    </div>
  );
};

export default UserSpotUpdate;
