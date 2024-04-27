import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import Slider from "../../components/Slider/Sliders";
import TouristsSpots from "../../components/TouristsSpots/TouristsSpots";
import CountrySection from "../../components/CountrySection/CountrySection";
import GuidesSection from "../../components/GuidesSection/GuidesSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { setData } = useContext(AuthContext);
  useEffect(() => {
    fetchData();
  }, []);
  const loaderData = useLoaderData();
  const fetchData = async () => {
    try {
      setData(loaderData);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Helmet>
        <title>World Journeys || Home</title>
      </Helmet>
        <Slider/>
        <TouristsSpots/>
        <CountrySection/>
        <GuidesSection/>
    </div>
  );
};

export default Home;
