
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useUserRole from '../hooks/useUserRole';

const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth();
    const  [userRole, isUserRoleLoading] = useUserRole()
    const location = useLocation();

    const isInstructor = userRole === 'instructor';

    if(loading || isUserRoleLoading){
        return <progress className="progress w-56"></progress>;
    }

    if(user && isInstructor){
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};
export default InstructorRoute;