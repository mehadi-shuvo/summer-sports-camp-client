import { useQuery } from "react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const MyClasses = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: classes=[]} = useQuery({
        queryKey: ['classes'],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/class/instructor/${user.email}`);
            return res.data;
        }
    })
    return (
        <div className="my-20">
            my total classes {classes.length}
        </div>
    );
};

export default MyClasses;