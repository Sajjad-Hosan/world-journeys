import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { Navigate, useParams } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,wait} = useContext(AuthContext);
    const {pathname} = useParams();
    if(wait){
        return <div>loading....</div>
    }
    if(user){
        return <>{children}</>
    }
    return <Navigate to='/login' state={pathname || '/'}/>
};

export default PrivateRoute;