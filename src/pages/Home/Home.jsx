import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import Slider from "../../components/Slider/Sliders";
import TouristsSpots from "../../components/TouristsSpots/TouristsSpots";
import CountrySection from "../../components/CountrySection/CountrySection";
import GuidesSection from "../../components/GuidesSection/GuidesSection";

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
        <Slider/>
        <TouristsSpots/>
        <CountrySection/>
        <GuidesSection/>
    </div>
  );
};

export default Home;
