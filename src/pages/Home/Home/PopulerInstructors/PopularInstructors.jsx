import { useEffect, useState } from "react";
import InstructorCard from "../../../Instructors/InstructorCard";
import { Fade } from "react-awesome-reveal";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [showInstructors, setShowInstructors] = useState([]);
    useEffect(()=>{
        fetch('https://sports-summer-camp-server.vercel.app/users/role/instructor')
        .then(res => res.json())
        .then(data => setInstructors(data));

        const SixInstructors = instructors.slice(0, 6);
        setShowInstructors(SixInstructors);
    },[instructors])
    return (
        <div className="w-4/5 mx-auto my-20">
            <h4 className="text-4xl text-orange-500 text-center font-bold py-10"><Fade delay={1e3} cascade damping={1e-1}>Popular Instructors</Fade></h4>
            <div className="grid md:grid-cols-3 gap-5">
            {
              showInstructors.map(instructor=> <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)   
            }
            </div>
        </div>
    );
};

export default PopularInstructors;