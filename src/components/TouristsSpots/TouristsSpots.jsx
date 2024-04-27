import { useContext, useEffect } from "react";
import TourCard from "../TourCard/TourCard";
import { AuthContext } from "../../Auth/AuthProvider";

const TouristsSpots = () => {
  const {data,country, setCountry,filter,setFilter } = useContext(AuthContext);
  useEffect(() => {
    setCountry(localStorage.getItem("country"));
    const result = data.filter(item => item.country_Name === country);
    setFilter(result);
  },[country]);
  const handleCountryType = (country) => {
    const countryName = country.target.value;
    localStorage.setItem("country", countryName);
    setCountry(countryName);
  };
  console.log(filter)
  return (
    <div className="flex flex-col gap-5 mt-24">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold">Tourists Section</h1>
        <p className="text-md mt-3 font-semibold font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum possimus
          culpa repellendus temporibus laboriosam quidem quod natus nostrum
          quisquam quos. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Non deleniti consectetur fugiat consequatur minima debitis aut
          quia eaque, ad aspernatur quis officiis numquam impedit omnis quos
          odit quo necessitatibus sed.
        </p>
      </div>
      <div className="text-center">
        <h1 className="text-xl font-light mb-5">Pick Your Travel Country</h1>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleCountryType}
        >
          <option disabled defaultValue>
            Country Name
          </option>
          <option>France</option>
          <option>Spain</option>
          <option>Italy</option>
          <option>England</option>
          <option>Netherlands</option>
          <option>Switzerland</option>
          <option disabled>Comming Soon...</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-5">
        {
          filter.map(tour => <TourCard key={tour._id} tour={tour} />)
        }
      </div>
    </div>
  );
};

export default TouristsSpots;
