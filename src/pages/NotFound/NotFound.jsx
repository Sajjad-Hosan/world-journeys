import { Helmet } from "react-helmet-async";
import image from '../../assets/404/notFound.svg';
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="w-full h-full bg-white relative flex flex-col items-center justify-center min-h-screen">
      <Helmet>
        <title>World Journeys || 404 Page</title>
      </Helmet>
     
     <img className="w-3/5" src={image} alt="" />
     <Link to='/' className="absolute bottom-4 btn btn-neutral px-12">Home</Link>
    </div>
  );
};

export default NotFound;
