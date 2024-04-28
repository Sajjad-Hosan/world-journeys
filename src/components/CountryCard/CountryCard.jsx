import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CountryCard = ({ country }) => {
  const { image, flag, country_Name, description } = country;
  return (
    <>
      <div className="card w-full h-full shadow-xl overflow-hidden relative">
        <div className="avatar absolute right-4 w-24">
          <img src={flag} />
        </div>
        <figure>
          <img className="w-full h-[500px]" src={image} alt="Shoes" />
        </figure>
        <div className="flex flex-col gap-3 absolute -bottom-2 bg-neutral opacity-80 text-white p-5 rounded-3xl w-full font-montserrat">
          <h2 className="card-title">{country_Name}</h2>
          <p className="text-xs">{description}</p>
          <Link
            to={`/${country_Name}/cards`}
            className="btn btn-secondary px-8 font-light font-pacifico"
          >
            More Card
          </Link>
        </div>
      </div>
    </>
  );
};
CountryCard.propTypes = {
  country: PropTypes.object,
};
export default CountryCard;
