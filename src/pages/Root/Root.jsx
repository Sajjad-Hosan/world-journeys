import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import "sweetalert2/src/sweetalert2.scss";
import 'react-tooltip/dist/react-tooltip.css'

const Root = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }else{
    return (
      <div className="font-pacifico min-h-screen flex gap-5 flex-col justify-between">
      <Header />
      <div className="px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
};

export default Root;
