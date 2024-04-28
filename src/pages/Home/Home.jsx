import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import Slider from "../../components/Slider/Sliders";
import TouristsSpots from "../../components/TouristsSpots/TouristsSpots";
import CountrySection from "../../components/CountrySection/CountrySection";
import GuidesSection from "../../components/GuidesSection/GuidesSection";
import { Helmet } from "react-helmet-async";
import AboutUs from "../../components/AboutUs/AboutUs";
import { Slide } from "react-awesome-reveal";

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
      <Slide dumping={0.1}>
      <Slider />
      </Slide>
      <TouristsSpots />
      <CountrySection />
      <GuidesSection/>
      <AboutUs/>
    </div>
  );
};

export default Home;
