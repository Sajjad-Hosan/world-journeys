import { useLoaderData, useParams } from "react-router-dom";
import TourCard from "../../components/TourCard/TourCard";

const CountryCards = () => {
    const data = useLoaderData();
    const {countryName} = useParams();
    const filter = data.filter(country => country.country_Name === countryName);
    console.log(filter);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                filter.map(data => <TourCard key={data._id} tour={data}/>)
            }
        </div>
    );
};

export default CountryCards;