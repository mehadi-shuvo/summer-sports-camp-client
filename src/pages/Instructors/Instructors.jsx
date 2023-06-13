import { useQuery } from "react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import InstructorCard from "./InstructorCard";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/users/role/instructor');
        return res.data
    })
    return (
        <div className="">
             <Helmet>
                <title>SSCamp | Instructors</title>
            </Helmet>
            <h4 className="text-4xl text-orange-500 text-center font-bold py-10 bg-orange-200">Our Awesome Instructors</h4>


            <div className="w-4/5 mx-auto my-10">
                <div className="grid grid-cols-3 gap-5">
                    {
                        instructors.map(instructor => <InstructorCard
                            key={instructor._id}
                            instructor={instructor}
                        ></InstructorCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Instructors;