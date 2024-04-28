import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user, wait } = useContext(AuthContext);
  const { pathname } = useLocation();
  if (wait) {
    return <div className="flex items-center justify-center"><span className="loading loading-ring loading-lg"></span></div>;
  }
  if (user) {
    return <>{children}</>;
  }
  return <Navigate to="/login" state={pathname} />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
