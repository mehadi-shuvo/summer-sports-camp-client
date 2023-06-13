import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";


const StudentRoute = ({children}) => {
    const {user, loading} = useAuth();
    const  [userRole, isUserRoleLoading] = useUserRole()
    const location = useLocation();
  //  console.log(userRole);
    const student = userRole === undefined;

    if(loading || isUserRoleLoading){
        return <progress className="progress w-56"></progress>;
    }

    if(user && student){
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;