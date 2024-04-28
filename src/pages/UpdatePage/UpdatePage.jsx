import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2";

const UpdatePage = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    image,
    tourists_spot_name,
    country_Name,
    location,
    short_description,
    description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
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
    };
    //
    fetch(`https://world-journeys-server.vercel.app/tourist/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(touristsDetails),
    }).then(() => {
      Swal.fire({
        title: "Create",
        Text: "Data has added to database!",
        icon: "success",
      });
      navigate(-1);
    });
    form.reset();
  };
  return (
    <div className="px-8 py-4">
      <h1 className="text-4xl font-semibold">Update Tourists Spot</h1>
      <form
        onSubmit={handleAddSpot}
        className="md:grid md:grid-cols-2 gap-5 px-10 py-5 my-8"
      >
        <input
          type="text"
          name="spot_name"
          defaultValue={tourists_spot_name}
          placeholder="tourists spot name"
          className="input input-bordered w-full font-medium font-montserrat"
        />
        <div className="flex flex-col md:flex-row gap-5 my-5 md:my-0">
          <input
            type="text"
            defaultValue={country_Name}
            name="Country_name"
            placeholder="country name"
            className="input input-bordered w-full font-medium font-montserrat"
          />
          <input
            type="text"
            name="location_name"
            defaultValue={location}
            placeholder="location name"
            className="input input-bordered w-full font-medium font-montserrat"
          />
        </div>
        <input
          type="text"
          name="short_des"
          defaultValue={short_description}
          placeholder="short description"
          className="input input-bordered w-full font-medium font-montserrat"
        />
        <div className="flex flex-col md:flex-row gap-5 my-5 md:my-0">
          <input
            type="text"
            name="avg_cost"
            defaultValue={average_cost}
            placeholder="average cost"
            className="input input-bordered w-full font-medium font-montserrat"
          />
          <input
            type="text"
            name="travel_time"
            defaultValue={travel_time}
            placeholder="travel time"
            className="input input-bordered w-full font-medium font-montserrat"
          />
        </div>
        <input
          type="text"
          name="photoUrl"
          defaultValue={image}
          placeholder="photoUrl"
          className="input input-bordered w-full font-medium font-montserrat"
        />
        <div className="flex flex-col md:flex-row gap-5 my-5 md:my-0">
          <input
            type="text"
            name="seasonality"
            defaultValue={seasonality}
            placeholder="seasonality names"
            className="input input-bordered w-full font-medium font-montserrat"
          />
          <input
            type="text"
            name="total_visitor"
            defaultValue={totalVisitorsPerYear}
            placeholder="total visitor per year"
            className="input input-bordered w-full font-medium font-montserrat"
          />
        </div>
        <textarea
          className="textarea textarea-bordered font-montserrat col-span-2"
          name="description"
          placeholder="description"
          defaultValue={description}
          rows="6"
        ></textarea>
        <div className="col-span-2 mx-auto my-5">
          <input
            type="submit"
            value="Update Spot"
            className="btn btn-neutral px-10"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
