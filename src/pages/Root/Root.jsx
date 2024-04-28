import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "sweetalert2/src/sweetalert2.scss";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const Root = () => {
  const { wait } = useContext(AuthContext);
  if (wait) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="font-pacifico min-h-screen flex gap-5 flex-col justify-between">
      <Header />
      <div className="px-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
