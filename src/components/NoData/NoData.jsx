import { Link } from "react-router-dom";

const NoData = () => {
    return (
        <div className="w-[450px] p-10 bg-neutral text-center text-white rounded-2xl mt-5 col-span-2 mx-auto">
            <h1 className="text-4xl">No Data Here!</h1>
            <Link to='/addSpot' className="btn btn-primary px-10 mt-8 font-semibold">Add Spot</Link>
        </div>
    );
};

export default NoData;