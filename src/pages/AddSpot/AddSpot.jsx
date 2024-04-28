import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";

const AddSpot = () => {
  const { add, setAdd, user } = useContext(AuthContext);
  const emailId = user?.email;
  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const tourists_spot_name = form.spotName.value;
    const country_Name = form.countryName.value;
    const location = form.locationName.value;
    const short_description = form.shortDes.value;
    const description = form.description.value;
    const average_cost = form.avgCost.value;
    const travel_time = form.travelTime.value;
    const image = form.photoUrl.value;
    const seasonality = form.seasonality.value;
    const totalVisitorsPerYear = form.totalVisitor.value;
    const userName = form.user_name.value;
    const userEmail = form.user_email.value;
    const touristsDetails = {
      image,
      tourists_spot_name,
      country_Name,
      location,
      description,
      average_cost,
      short_description,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
      userName,
      userEmail,
      emailId,
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
    });
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
          name="spotName"
          placeholder="tourists spot name"
          className="input input-bordered w-full font-medium "
          required
        />
        <div className="flex flex-col md:flex-row gap-5 my-5 md:my-0">
          <input
            type="text"
            name="countryName"
            placeholder="country name"
            className="input input-bordered w-full font-medium "
            required
          />
          <input
            type="text"
            name="locationName"
            placeholder="location name"
            required
            className="input input-bordered w-full font-medium "
          />
        </div>
        <input
          type="text"
          name="shortDes"
          placeholder="short description"
          className="input input-bordered w-full font-medium "
        />
        <div className="flex flex-col md:flex-row gap-5 my-5 md:my-0">
          <input
            type="text"
            name="avgCost"
            placeholder="average cost"
            className="input input-bordered w-full font-medium "
          />
          <input
            type="text"
            name="travelTime"
            placeholder="travel time"
            className="input input-bordered w-full font-medium "
          />
        </div>
        <input
          type="text"
          name="photoUrl"
          required
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
            name="totalVisitor"
            placeholder="total visitor per year"
            className="input input-bordered w-full font-medium "
          />
        </div>
        <input
          type="text"
          name="user_name"
          placeholder="write your username"
          className="input input-bordered w-full font-medium "
          required
        />
        <input
          type="text"
          name="user_email"
          placeholder="write your email"
          className="input input-bordered w-full font-medium  mt-5 md:mt-0"
          required
        />
        <textarea
          name="description"
          className="w-full col-span-2 textarea textarea-bordered mt-5 md:mt-0"
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
