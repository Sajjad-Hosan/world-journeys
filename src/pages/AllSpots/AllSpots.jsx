import TourCard from "../../components/TourCard/TourCard";
import { useLoaderData } from "react-router-dom";

const AllSpots = () => {
    const data = useLoaderData();
    return (
        <div className="grid grid-cols-2 gap-6">
            {
                // data.map(item => <TourCard  tour={item}/>)
            }
        </div>
    );
};

export default AllSpots;