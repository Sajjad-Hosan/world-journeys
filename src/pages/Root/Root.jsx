import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import 'sweetalert2/src/sweetalert2.scss';

const Root = () => {
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
