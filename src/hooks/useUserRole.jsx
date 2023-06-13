import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUserRole = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: userRole, isLoading: isUserRoleLoading } = useQuery({
        queryKey: ['userRole', user?.email],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/role/${user?.email}`);
            return res.data?.userRole;
        }
    })
    return [userRole, isUserRoleLoading]
};

export default useUserRole;