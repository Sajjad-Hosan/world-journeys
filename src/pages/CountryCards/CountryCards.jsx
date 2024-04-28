import { useLoaderData, useParams } from "react-router-dom";
import TourCard from "../../components/TourCard/TourCard";
import { Helmet } from "react-helmet-async";
import { Slide } from "react-awesome-reveal";

const CountryCards = () => {
    const data = useLoaderData();
    const {countryName} = useParams();
    const filter = data.filter(country => country.country_Name === countryName);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Helmet>
        <title>World Journeys || Country Cards</title>
      </Helmet>
      <Slide>
            {
                filter.map(data => <TourCard key={data._id} tour={data}/>)
            }
            </Slide>
        </div>
    );
};

export default CountryCards;