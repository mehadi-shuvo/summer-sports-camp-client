import { useQuery } from "react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import ClassCard from "./classCard";
import { Helmet } from "react-helmet-async";


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
        <div className="my-20 mr-10">
            <Helmet>
                <title>Instructor | Class</title>
            </Helmet>
            <h4 className="text-center text-4xl text-orange-500 font-bold mb-8">My classes</h4>

            <div className="grid grid-cols-3 gap-5">
                {
                    classes.map((item)=> <ClassCard key={item._id} item={item}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default MyClasses;