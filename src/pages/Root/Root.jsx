import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div className="font-montserrat">
      <Header />
      <div className="px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
