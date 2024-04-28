import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TourCard = ({tour}) => {
  const {_id,image,tourists_spot_name,location,short_description} = tour;
  return (
    <>
      <div className="card bg-neutral text-white shadow-xl p-6">
        <div className="rounded-lg h-[300px] overflow-hidden">
          <img
          className="w-full h-full object-cover"
            src={image}
            alt="Movie"
          />
        </div>
        <div className="card-body font-montserrat">
          <h2 className="card-title font-extralight">{tourists_spot_name}</h2>
          <p className="text-sm">{location}</p>
          <p className="">{short_description}</p>
          <div className="card-actions justify-end mt-5">
            <Link to={`/tourist/${_id}`} className="btn btn-primary font-pacifico">View Details</Link>
          </div>
        </div>
      </div>
    </>
  );
};
TourCard.propTypes = {
  tour: PropTypes.object,
};
export default TourCard;
