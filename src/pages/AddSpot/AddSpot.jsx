import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";

const AddSpot = () => {
  const { add, setAdd, user } = useContext(AuthContext);
  const emailId = user?.email;
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
      emailId
    };
    //
    fetch("http://localhost:4000/user-spot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(touristsDetails),
    });
    setAdd([...add, touristsDetails]);
    Swal.fire({
      title: "Create",
      text: "Data has added to database!",
      icon: "success",
    })
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
          placeholder="tourists spot name"
          className="input input-bordered w-full font-medium "
        />
        <div className="flex flex-col md:flex-row gap-5 my-5 md:my-0">
          <input
            type="text"
            name="Country_name"
            placeholder="country name"
            className="input input-bordered w-full font-medium "
          />
          <input
            type="text"
            name="location_name"
            placeholder="location name"
            className="input input-bordered w-full font-medium "
          />
        </div>
        <input
          type="text"
          name="short_des"
          placeholder="short description"
          className="input input-bordered w-full font-medium "
        />
        <div className="flex flex-col md:flex-row gap-5 my-5 md:my-0">
          <input
            type="text"
            name="avg_cost"
            placeholder="average cost"
            className="input input-bordered w-full font-medium "
          />
          <input
            type="text"
            name="travel_time"
            placeholder="travel time"
            className="input input-bordered w-full font-medium "
          />
        </div>
        <input
          type="text"
          name="photoUrl"
          placeholder="photoUrl"
          className="input input-bordered w-full font-medium "
        />
        <div className="flex flex-col md:flex-row gap-5 my-5 md:my-0">
          <input
            type="text"
            name="seasonality"
            placeholder="seasonality names"
            className="input input-bordered w-full font-medium "
          />
          <input
            type="text"
            name="total_visitor"
            placeholder="total visitor per year"
            className="input input-bordered w-full font-medium "
          />
        </div>
        <input
          type="text"
          name="user_name"
          placeholder="write your username"
          className="input input-bordered w-full font-medium "
        />
        <input
          type="text"
          name="user_email"
          placeholder="write your email"
          className="input input-bordered w-full font-medium  mt-5 md:mt-0"
        />
        <textarea
          name="description"
          className="w-full col-span-2 textarea textarea-bordered mt-5"
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

export default AddSpot;
