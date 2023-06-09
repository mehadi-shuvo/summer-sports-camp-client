import { useQuery } from "react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/users/role/instructor');
        return res.data
    })
    return (
        <div className="my-20">
            <h4 className="text-4xl text-orange-500 text-center font-bold mb-7">Our Awesome {instructors.length} Instructors</h4>


            <div className="w-4/5 mx-auto ">
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