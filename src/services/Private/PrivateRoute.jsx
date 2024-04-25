import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,wait} = useContext(AuthContext);
    if(wait){
        return <div>loading....</div>
    }
    if(user){
        return <>{children}</>
    }
    return <Navigate to='/login' />
};

export default PrivateRoute;